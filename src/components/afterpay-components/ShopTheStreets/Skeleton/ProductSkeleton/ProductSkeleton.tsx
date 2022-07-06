import * as React from 'react';
import './ProductSkeleton.scss';

const ProductSkeleton= () => {
    const dummySkeletonData = [1, 2, 3];
    return (
        <div className="product-skeleton">
            {dummySkeletonData.map((item) => {
                return (
                    <div key={item} className="product-item">
                        <div className="product-detail"></div>
                    </div>
                );
            })}
        </div>
    );
};
export default ProductSkeleton;