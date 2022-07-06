import * as React from 'react';
import InfoSkeleton from '../Skeleton/InfoSkeleton/InfoSkeleton';
import './ShopTheStreetsInfo.scss';
const ShopTheStreetsInfo= ({ userData ,isLoading }: any) => {
    if (isLoading) {
        return <InfoSkeleton/>
    }
    if (!userData) {
        return null
    }
    return (
        <div className="info">
            <div className="info-container">
                <div className="border-avatar">
                    <div
                        className="avatar"
                        style={{
                            backgroundImage: `url('${userData.avatarImageUrl}')`,
                        }}
                    />
                </div>
                <p className="account-name">{userData.accountName}</p>
            </div>
        </div>
    );
};
export default ShopTheStreetsInfo;