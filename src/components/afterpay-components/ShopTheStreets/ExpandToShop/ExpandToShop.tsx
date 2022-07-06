import * as React from 'react';
import { useEffect, useRef } from 'react';
import IconExpandToShop from '../Icons/IconExpandToShop';
import './ExpandToShop.scss';
type ExpandToShopProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
};
export const ExpandToShop = ({ onClick }: ExpandToShopProps) => {
    const expandToShopContainerRef = useRef<any>(null);
    useEffect(() => {
        if (expandToShopContainerRef?.current) {
            expandToShopContainerRef.current.addEventListener('click', onClick);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandToShopContainerRef]);
    return (
        <div ref={expandToShopContainerRef} className="expand-to-shop" onClick={onClick}>
            <span className="expand-to-shop__title">Expand to shop</span>
            <div className="expand-to-shop__icon">
                <IconExpandToShop />
            </div>
        </div>
    );
};
