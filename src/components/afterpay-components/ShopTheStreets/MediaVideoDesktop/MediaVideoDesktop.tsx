import { useRef } from 'react';
import SwiperCore, { Lazy, Navigation } from 'swiper';
import 'swiper/components/lazy';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import ImageZoom from '../../ImageZoom/ImageZoom';
import IconRight from '../Icons/IconRight';
import './MediaVideoDesktop.scss';
SwiperCore.use([Lazy, Navigation]);

const MediaVideoDesktop = ({ media }: any) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="media-video-product-desktop-container">
      <div ref={nextRef} className="swiper-button swiper-button-next">
        <IconRight />
      </div>
      <div ref={prevRef} className="swiper-button swiper-button-prev">
        <IconRight />
      </div>
      <Swiper
        key={media.id}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper: SwiperCore | any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        slidesPerView={3}
        spaceBetween={16}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 2 }}
        watchSlidesVisibility={true}
        className=" product-swiper-popup "
      >
        {(media?.products || []).map((p: any) => {
          return (
            <SwiperSlide key={p.id}>
              <a target="_blank" rel="noreferrer" href={p.url}>
                <ImageZoom
                  src={p.image_url}
                  ratio={[4, 5]}
                  className="product-image"
                />
                <span className="name">{p.title}</span>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default MediaVideoDesktop;
