import isMobile from 'ismobilejs';
import * as React from 'react';
import './Header.scss';

export type HeaderComponentProps = {
    title: string;
    description: string;
    desktopVideoUrl: string;
    mobileVideoUrl: string;

    placeholderImageUrl?: string;
};

const configVideo: { [ratio: string]: any } = {
    '16:9': {
        videoURL: 'https://player.vimeo.com/video/585145259?autoplay=1&muted=1&title=0&byline=0&portrait=0',
        ratio: [16, 9],
    },
    '4:5': {
        videoURL: 'https://player.vimeo.com/video/585148977?autoplay=1&muted=1&title=0&byline=0&portrait=0',
        ratio: [4, 5],
    },
};

const Header=(props: HeaderComponentProps) => {
    const { placeholderImageUrl } = props;
    const renderVidPlayer = () => {
        const { desktopVideoUrl, mobileVideoUrl } = props;

        let ratio = [16, 9];
        let videoUrl = desktopVideoUrl || configVideo['16:9'].videoURL;
        if (isMobile().any) {
            ratio = [4, 5];
            videoUrl = desktopVideoUrl ? mobileVideoUrl || desktopVideoUrl : configVideo['4:5'].videoURL;
        }

        const [width, height] = ratio;
        const leadVideoPaddingTop = (height / width) * 100;
        return (
            <div className="lead-video" style={{ paddingTop: `${leadVideoPaddingTop}%` }}>
                <iframe title='lead-video' src={videoUrl} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            </div>
        );
    };

    const renderPlaceholderImage = () => {
        let [width, height] = [16, 9];
        if (isMobile().any) {
            [width, height] = [4, 5];
        }
        const leadImagePaddingTop = (height / width) * 100;

        return (
            <div className="lead-image" style={{ paddingTop: `${leadImagePaddingTop}%` }}>
                <img
                    alt=''
                    src={placeholderImageUrl}
                />
            </div>
        );
    };

    return (
        <div className="header-hero-container">
            {placeholderImageUrl ? renderPlaceholderImage() : renderVidPlayer()}
            <div className="header-info">
                <p className="title">{props.title}</p>
                <p className="description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
            </div>
        </div>
    );
};
export default Header;