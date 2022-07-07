import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import { launchBambuserShow } from '../../helpers/BambuserHelper';
import { getDateTime } from '../../helpers/TimeHelper';

import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import IconLocation from '../../Icons/IconLocation';
import PopoverCalendar from '../../PopoverCalendar/PopoverCalendar';
import Status, { StatusData } from '../Status/Status';
import './SliderItem.scss';

dayjs.extend(utc);
dayjs.extend(timezone);
export type SliderItemData = {
  mobileVideo?: string;
  desktopVideo?: string;
  mobileBackgroundUrl?: string;
  backgroundUrl: string;
  active?: boolean;
  startDate: dayjs.Dayjs;
  endDate?: dayjs.Dayjs;
  title: string;
  location: string;
  buttonLabel: string;
  status?: StatusData;
  useCalendar?: boolean;
  bambuserId?: string;
  linkOverride?: string;
};

export type SliderItemProps = {
  data: SliderItemData;
  inMobileView: boolean;
};

export default function SliderItem(props: SliderItemProps) {
  const { data, inMobileView } = props;

  const ref = useRef<any>(null);

  const launchBambuser = (e: any) => {
    if (data.linkOverride) {
      e.preventDefault();
      window.location.href = data.linkOverride;
      return;
    }

    if (data.bambuserId) {
      launchBambuserShow(data.bambuserId);
      return;
    }
  };

  useEffect(() => {
    if (ref?.current) {
      ref.current.addEventListener('click', (e: MouseEvent) => {
        launchBambuser(e);
      });
      handleDeepLink();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  const handleDeepLink = () => {
    try {
      if (data.linkOverride) {
        return;
      }
      if (!data.bambuserId) {
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const bambuserId = urlParams.get('bambuserId');
      if (bambuserId === data.bambuserId) {
        launchBambuserShow(bambuserId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const startDate = dayjs(data.startDate).tz('America/New_York');
  const endDate = dayjs(data.endDate).tz('America/New_York');

  const bgVideoBlock = (url: string) => {
    return (
      <video autoPlay={true} loop={true} muted={true} playsInline={true}>
        <source src={url} />
      </video>
    );
  };

  const bgImageBlock = (url: string) => {
    return (
      <div
        className="slider-item__background-image"
        style={{ backgroundImage: `url('${url}')` }}
      ></div>
    );
  };

  let backgroundElement = null;

  if (inMobileView) {
    if (data.mobileVideo) {
      backgroundElement = bgVideoBlock(data.mobileVideo);
    } else {
      backgroundElement = bgImageBlock(data.mobileBackgroundUrl ?? '');
    }
  } else {
    if (data.desktopVideo) {
      backgroundElement = bgVideoBlock(data.desktopVideo);
    } else {
      backgroundElement = bgImageBlock(data.backgroundUrl);
    }
  }

  return (
    <div className="slider-item" ref={ref}>
      <div className="slider-item__background">{backgroundElement}</div>
      <div className="slider-item__header">
        <div className="slider-item__status">
          <Status data={data.status} />
        </div>
        {data.useCalendar && (
          <div className="slider-item__calendar">
            <PopoverCalendar
              isWhite
              event={{
                name: data.title,
                details: null,
                location: data.location,
                startsAt: startDate,
                endsAt: endDate,
              }}
            />
          </div>
        )}
      </div>
      <div className="slider-item__content">
        <div className="slider-item__start-date">
          {getDateTime(startDate, endDate)}
        </div>
        <div className="slider-item__title">{data.title}</div>
        <div className="slider-item__location">
          <IconLocation /> <span>{data.location}</span>
        </div>
        <a className="slider-item__categories" href={data.linkOverride}>
          {data.buttonLabel}
        </a>
      </div>
    </div>
  );
}
