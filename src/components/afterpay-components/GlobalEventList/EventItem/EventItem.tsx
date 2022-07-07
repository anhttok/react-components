import { Dayjs } from 'dayjs';
import './EventItem.scss';

import { EventLocation } from '../../helpers/EventHelper';
import EventContentLg from '../EventContentLg/EventContentLg';
import EventContentMd from '../EventContentMd/EventContentMd';

export type EventTheme = 'default' | 'nyfw-2022';

type CTAProps = {
  label?: string;
  url?: string;
};

export type Event = {
  id: string;
  startDate: Dayjs;
  endDate: Dayjs;
  url: string;

  overrideUrl?: string;
  vimeoUrl?: string;
  eventLocation?: EventLocation;

  title: string;
  leadImageUrl: string;
  location: string;
  description: string;
  backgroundColor?: string;
  categories: string[];

  pageImageOverrideUrl?: string;
  seenowBuynowEvent?: boolean;
  bambuserId?: string;
  extraCtas?: CTAProps[];
  timezoneDisplay?: 'ET' | 'PT';
  disableCta?: boolean;
};

export type EventItemProps = {
  event: Event;
  type: 'list' | 'grid';
  theme?: EventTheme;
};

export default function EventItem(props: EventItemProps) {
  const { event, type, theme } = props;
  const backgroundImage = `url('${event.leadImageUrl}')`;

  return (
    <div
      style={{ backgroundColor: event.backgroundColor }}
      className={`global-event-item-container nyfw-${type} ${
        theme || ''
      } event-${event.id} ${event.disableCta ? 'event-disable-cta' : ''}`}
    >
      <div className="event-time-and-date">
        {event.startDate.format('h:mm')}-{event.endDate?.format('h:mm A')}{' '}
        {event.timezoneDisplay}
      </div>
      <div className="lead-image" style={{ backgroundImage }}></div>
      {type === 'list' && <EventContentLg event={event} />}
      <EventContentMd event={event} />
      <a
        href={event.overrideUrl ?? event.url}
        className="global-event-item-container--link"
      />
    </div>
  );
}
