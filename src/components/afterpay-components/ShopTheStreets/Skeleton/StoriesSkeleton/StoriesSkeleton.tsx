
import * as React from 'react';
import './StoriesSkeleton.scss';
const StoriesSkeleton= () => {
    const dummySkeletonData = [1, 2, 3];
    return (
        <div className="stories-skeleton">
            {dummySkeletonData.map((item) => {
                return (
                    <div key={item} className="">
                        <div className="image-skeleton"></div>
                        <div className="name-skelton"></div>
                    </div>
                );
            })}
        </div>
    );
};
export default StoriesSkeleton;