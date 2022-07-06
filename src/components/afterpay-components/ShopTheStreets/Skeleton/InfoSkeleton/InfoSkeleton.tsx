import * as React from 'react';
import './InfoSkeleton.scss';

const InfoSkeleton= () => {
    return (
        <div className="info-skeleton">
            <div className="border-skeleton"></div>
            <div className="name-skeleton"></div>
        </div>
    );
};
export default InfoSkeleton;