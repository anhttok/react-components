import { useEffect, useRef } from 'react';
import { Event } from '../GlobalEventList/EventItem/EventItem';
import { launchBambuserShow } from '../helpers/BambuserHelper';
import { EventLocation } from '../helpers/EventHelper';
import './WatchShopButton.scss';

export type WatchShopButtonProps = {
  event: Event;
  className?: string;
};

const WatchShopButton = ({ event, className }: WatchShopButtonProps) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (event.eventLocation === EventLocation.NewYork) {
      ref?.current?.addEventListener('click', (e: any) => {
        e.preventDefault();

        if (event.bambuserId) {
          launchBambuserShow(event.bambuserId);
        }
      });
    }
    if (event.eventLocation === EventLocation.Barcelona) {
      ref?.current?.addEventListener('click', (e: any) => {
        e.preventDefault();

        if (event.url) {
          window.location.href = event.url;
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <a href='/' className={`watch-shop-button ${className}`} ref={ref}>
      <button className="btn-watch-shop">
        <div className="is-live"></div>
        <span>Watch &amp; Shop</span>
      </button>
    </a>
  );
};
export default WatchShopButton;
