import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSliderComponent.scss';
import SliderItem, { SliderItemData } from './SliderItem/SliderItem';
SwiperCore.use([Autoplay, Pagination]);

export type HeroSliderComponentProps = {
  data: SliderItemData[];
  isOutside?: boolean;
};

export default function HeroSliderComponent(props: HeroSliderComponentProps) {
  const { data, isOutside } = props;

  const [isInMobile, setIsInMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 768) {
        setIsInMobile(true);
      } else {
        setIsInMobile(false);
      }
    };
    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="hero-slider-container">
      <Swiper
        className={isOutside ? 'swiper-outside' : ''}
        loop={false}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<button class="' + className + '"></button>';
          },
        }}
      >
        {data &&
          !!data.length &&
          data.map((item: SliderItemData, index) => {
            if (!item.active) {
              return null;
            }
            return (
              <SwiperSlide key={index}>
                <SliderItem data={item} inMobileView={isInMobile} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
