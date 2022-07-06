import SwiperCore, { Lazy } from 'swiper';
import 'swiper/components/lazy';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import ImageZoom from '../../ImageZoom/ImageZoom';
import './MediaVideoMobile.scss';
SwiperCore.use([Lazy]);
const MediaVideoMobile = ({ media }: any) => {
  return (
    <div className="media-video-product-mobile-container">
      <Swiper
        slidesPerView={'auto'}
        freeMode={false}
        spaceBetween={0}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 3,
          loadOnTransitionStart: true,
        }}
        watchSlidesVisibility={true}
        className="product-swiper-popup"
      >
        {(media?.products || []).map((p: any) => {
          return (
            <SwiperSlide key={p.id}>
              <a
                target="_blank"
                rel="noreferrer"
                href={p.url}
                className="product-item"
              >
                <ImageZoom
                  ratio={[35, 48]}
                  src={p.image_url}
                  className="product-image"
                />
                <div className="name">{p.title}</div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default MediaVideoMobile;
