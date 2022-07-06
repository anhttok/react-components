import isMobile from 'ismobilejs';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import ShopTheStreetsStoryItem, { ShopTheStreetsStory } from '../ShopTheStreetsStoryItem/ShopTheStreetsStoryItem';
import StoriesSkeleton from '../Skeleton/StoriesSkeleton/StoriesSkeleton';
import './ShopTheStreetsStories.scss';

const ShopTheStreetsStories= ({ userData, onClick, currentUserId, isLoading }: any) => {
    if (isLoading) {
        return <StoriesSkeleton />;
    }
    return (
        <div className="shop-the-streets-stories-content-list">
            <Swiper slidesPerView={'auto'} spaceBetween={isMobile().any ? 14 : 22.4} freeMode={false} className="story-swiper">
                {userData.map((user: ShopTheStreetsStory) => {
                    return (
                        <SwiperSlide key={user.id}>
                            <ShopTheStreetsStoryItem user={user} onClick={onClick} currentUserId={currentUserId} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default ShopTheStreetsStories;