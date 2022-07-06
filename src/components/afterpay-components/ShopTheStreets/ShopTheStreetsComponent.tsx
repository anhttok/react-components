import isMobile from 'ismobilejs';
import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Lazy, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import IconNext from './Icons/IconNext';
import IconPrev from './Icons/IconPrev';
import Modal from './Modal';
import ProductItem, { ProductItemProps } from './ProductItem/ProductItem';
import './ShopTheStreetsComponent.scss';
import ShopTheStreetsInfo from './ShopTheStreetsInfo/ShopTheStreetsInfo';
import ShopTheStreetsStories from './ShopTheStreetsStories/ShopTheStreetsStories';
import ProductSkeleton from './Skeleton/ProductSkeleton/ProductSkeleton';
import VideoItem, { VideoItemProps } from './VideoItem/VideoItem';

SwiperCore.use([Lazy, Navigation]);

type SliderItemProps = {
  id?: string;
  type?: 'video' | 'product' | 'image';
  data?: VideoItemProps | ProductItemProps | ImageItemProps;
};
type ImageItemProps = {
  imageUrl: string;
};

export type ShopTheStreetsComponentProps = {
  galleryId: string;
  title: string;
  description: string;
  brandId?: string;
  overrideInfoInfluencers: OverrideInfoInfluencersType[];
};
type OverrideInfoInfluencersType = {
  avatarUrl: string;
  influencerName: string;
};
const getImageUrl = (url: string): string => {
  const needProxy = () => {
    if (url.startsWith('https://images.dashhudson.com')) {
      return true;
    }
    return false;
  };
  if (needProxy()) {
    return `https://api.di.res.afterpay.com/ah/image-handler/proxy?url=${url}`;
  }
  return url;
};
type MediaData = {
  id: any;
  avatarImageUrl: string;
  accountName: any;
  products: any;
  video: any;
  image: string;
  media: any;
};
const ShopTheStreetsComponent = (props: ShopTheStreetsComponentProps) => {
  const [mediaData, setMediaData] = useState<MediaData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  let positionSlideTo = 0;
  let isLoop = true;
  const userData = mediaData.find((item) => item.id === userId);

  useEffect(() => {
    var request = new XMLHttpRequest();
    const { galleryId, brandId, overrideInfoInfluencers = [] } = props;

    request.open(
      'GET',
      `https://api.nyfw.afterpay.com/the-look/get-galleries-media?galleryId=${
        galleryId ?? '652349'
      }${
        brandId ? `&brandId=${brandId}` : ''
      }` /* 652349, 605401, 503371 Remove later, but this is default for now*/,
      true
    );
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        setIsLoading(false);
        const data = JSON.parse(this.response);
        const newMediaData = [...data.data]
          .map((item: any, index: number) => {
            let avatarImageUrl,
              imageUrl = '';
            if (item.type === 'IMAGE') {
              avatarImageUrl = item.image.sizes?.small_square.url;
              imageUrl = item.image.sizes?.original.url;
            } else if (item.type === 'VIDEO') {
              avatarImageUrl =
                item.instagram?.media[0].urls.ratio ??
                item.video.thumbnails.medium_square.url;
            }
            const user = {
              id: item.id,
              avatarImageUrl: getImageUrl(avatarImageUrl),
              accountName: item.instagram?.instagram_user.handle ?? 'Afterbae',
              products: item.products,
              video: item.video,
              image: imageUrl,
              media: item.instagram?.media.splice(1),
            };
            if (overrideInfoInfluencers?.length > 0) {
              user.avatarImageUrl =
                overrideInfoInfluencers[index]?.avatarUrl ??
                user.avatarImageUrl;
              user.accountName =
                overrideInfoInfluencers[index]?.influencerName ??
                user.accountName;
            }

            return user;
          })
          .filter(Boolean);
        setMediaData(newMediaData);
        setUserId(newMediaData[0].id);
      } else {
      }
    };
    request.onerror = function () {
      setIsLoading(false);
    };
    request.send();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickGetUserId = (idUser: string) => {
    setUserId(idUser);
  };
  const handleGetSliderItems = () => {
    let sourceItem: SliderItemProps;
    if (userData?.video) {
      sourceItem = {
        id: userData.id,
        data: userData.video.sizes.original_converted.url,
        type: 'video',
      };
    } else {
      const id = Math.random() * 100_000;
      sourceItem = {
        id: id.toString(),
        data: { imageUrl: userData?.image ?? '' },
        type: 'image',
      };
    }

    const mediaItem: any[] = [...(userData?.media || [])]
      .map((item) => {
        if (item.media_type === 'IMAGE') {
          const type = 'image';
          const id = Math.random() * 100_000;
          const data = { imageUrl: item.urls.ratio };
          return { id, type, data };
        } else if (item.media_type === 'VIDEO') {
          const _id = Math.random() * 100_000;
          const videoItem: SliderItemProps = {
            id: _id.toString(),
            data: item.urls.full,
            type: 'video',
          };
          return videoItem;
        }
        return null;
      })
      .filter(Boolean);

    const productItems = [...(userData?.products || [])].map((item) => {
      const type = 'product';
      const id = item.id;
      if (!item.image_url || item.image_url === '') {
        return undefined;
      }
      const data: ProductItemProps = {
        url: item.url,
        imageUrl: item.image_url,
        title: item.title,
      };
      return { id, type, data };
    });

    const userSliderItem: SliderItemProps[] = moveVideoToFist([
      sourceItem,
      ...mediaItem,
    ]).slice(0, 2);

    let sliderItems: any[] = [...userSliderItem, ...productItems].filter(
      Boolean
    );

    if (sliderItems.length === 1) {
      sliderItems = [...sliderItems].reduce(
        (res: any, current: SliderItemProps) => [
          ...res,
          current,
          current,
          current,
        ],
        []
      );
      isLoop = false;
    }
    return sliderItems;
  };

  const moveVideoToFist = (items: SliderItemProps[]): SliderItemProps[] => {
    const videoIndex = items.findIndex((item) => item.type === 'video');
    if (videoIndex === -1) {
      return items;
    }
    const videoItem = items[videoIndex];
    items.splice(videoIndex, 1);
    items.unshift(videoItem);
    return items;
  };

  const sliderItems: SliderItemProps[] = handleGetSliderItems();

  const videoItem = sliderItems.find((item) => item.type === 'video');

  const onInit = (swiper: SwiperCore | any) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    if (!isLoop) {
      positionSlideTo = 1;
    }
    swiper.slideToLoop(positionSlideTo);
  };

  const lazyConfig = {
    loadPrevNext: true,
    loadPrevNextAmount: 2,
    loadOnTransitionStart: true,
  };
  const handleClickVideoItem = (index: number) => {
    setIsModalVisible(true);
    return;
  };
  const getProductItemUrl = (index: number, url: string) => {
    return url;
  };

  return (
    <div className="shop-the-streets-container">
      <div className="header-info">
        <p className="title">{props.title ?? 'Shop The Streets'}</p>
        <p className="description">{props.description ?? ''}</p>
      </div>
      <ShopTheStreetsStories
        userData={mediaData}
        onClick={onClickGetUserId}
        currentUserId={userId}
        isLoading={isLoading}
      />
      <div className="event-card">
        <ShopTheStreetsInfo userData={userData} isLoading={isLoading} />
        {sliderItems.length <= 0 || isLoading ? (
          <ProductSkeleton />
        ) : (
          <Swiper
            key={userId}
            onInit={(swiper) => onInit(swiper)}
            slidesPerView={'auto'}
            centeredSlides={isMobile().any ? false : true}
            spaceBetween={0}
            loop={isLoop}
            lazy={lazyConfig}
            watchSlidesVisibility={true}
            observer={true}
            observeParents={true}
            preloadImages={false}
            className="product-swiper"
          >
            {sliderItems
              .map((item: SliderItemProps, index: number) => {
                if (item.type === 'product') {
                  return (
                    <SwiperSlide key={item.id}>
                      <a
                        href={getProductItemUrl(
                          index,
                          (item.data as ProductItemProps).url ?? ''
                        )}
                        target="_blank"
                        aria-label={(item.data as ProductItemProps).title}
                        rel="noreferrer"
                      >
                        <ProductItem product={item.data} />
                      </a>
                    </SwiperSlide>
                  );
                }
                if (item.type === 'video')
                  return (
                    <SwiperSlide key={item.id}>
                      <VideoItem
                        onClick={() => handleClickVideoItem(index)}
                        videoUrl={item.data}
                      />
                    </SwiperSlide>
                  );
                if (
                  item.type === 'image' &&
                  (item.data as ImageItemProps).imageUrl !== ''
                ) {
                  return (
                    <SwiperSlide key={item.id}>
                      <ProductItem product={item.data} />
                    </SwiperSlide>
                  );
                }
                return null;
              })
              .filter(Boolean)}

            <div ref={prevRef} className="swiper-button swiper-button-prev">
              <IconPrev />
            </div>
            <div ref={nextRef} className="swiper-button swiper-button-next">
              <IconNext />
            </div>
          </Swiper>
        )}
      </div>

      <Modal
        show={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        media={userData}
        modalVideo={videoItem}
        userName={userData?.accountName}
      />
    </div>
  );
};
export default ShopTheStreetsComponent;
