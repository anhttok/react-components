import 'antd/dist/antd.min.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import ContentBody from './ContentBody/ContentBody';
import Countdown from './Countdown/Countdown';
import { dataDumpmy, dummyEvents, dummyShows } from './data';
import GlobalEventListComponent from './GlobalEventList/GlobalEventList';
import Header from './Header/Header';
import HeroSliderComponent from './HeroSlider/HeroSliderComponent';
import ShopTheStreetsComponent from './ShopTheStreets/ShopTheStreetsComponent';
import ShowList from './Show/ShowList/ShowList';
import './styles/index.styles.scss';
import './styles/modeDevelopStyles.scss';
import { EventListViewType } from './types';
type Props = {};

const AfterpayComponents = (props: Props) => {
  const [eventType, setEventType] = useState<EventListViewType>(
    EventListViewType.Grid
  );
  return (
    <div className="afterpay-components">
      <ContentBody backgroundImage="https://app.nyfw.afterpay.com/images/background.jpg">
        <Header
          title="Header"
          description="Description"
          desktopVideoUrl=""
          mobileVideoUrl=""
        />
      </ContentBody>
      <ContentBody>
        <HeroSliderComponent data={dataDumpmy} isOutside />
      </ContentBody>
      <ContentBody color="#FFF9D9">
        <button
          onClick={() => {
            if (eventType === EventListViewType.List) {
              setEventType(EventListViewType.Grid);
            } else setEventType(EventListViewType.List);
          }}
        >
          Switch event type
        </button>
        <GlobalEventListComponent
          type={eventType}
          events={dummyEvents as any}
        />
      </ContentBody>
      <ContentBody color="#FFF9D9">
        <ShopTheStreetsComponent
          galleryId="652349"
          title="Shop the streets"
          description="Fashion week"
          overrideInfoInfluencers={[]}
        />
      </ContentBody>
      <ContentBody color="#ffd333">
        <Countdown
          afterpayDay={dayjs('2022-30-10')}
          saleImageUrl="/images/countdown-sale.png"
        />
      </ContentBody>
      {/* <ContentBody color="#EADDF2">
        <FeaturedStoriesComponent />
      </ContentBody> */}
      <ContentBody color="#fff9d9">
        <ShowList shows={dummyShows} />
      </ContentBody>
    </div>
  );
};

export default AfterpayComponents;
