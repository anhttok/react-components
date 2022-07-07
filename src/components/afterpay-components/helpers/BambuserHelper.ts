const BAMBUSER_CDN = 'https://lcx-embed.bambuser.com/afterpay/embed.js';

declare global {
    interface Window {
        initBambuserLiveShopping: (config: any) => void;
        onBambuserLiveShoppingReady: (player: any) => void;
    }
}

let waitingPromise: Promise<void> | null = null;
let loaded = false;

export const launchBambuserShow = async (showId: string) => {
    if (!loaded) {
        if (waitingPromise === null) {
            waitingPromise = new Promise<void>((resolve) => {
                const script = document.createElement('script');
                script.setAttribute('src', BAMBUSER_CDN);
                script.onload = () => {
                    resolve();
                };

                document.body.appendChild(script);
            });
        }

        await waitingPromise;
        loaded = true;
    }

    window.onBambuserLiveShoppingReady = (player) => {
        player.configure({
            buttons: {
                dismiss: player.BUTTON.CLOSE,
                product: player.BUTTON.LINK,
            }
        })
    }

    window.initBambuserLiveShopping({
        showId,
        type: 'overlay',
    });
};
