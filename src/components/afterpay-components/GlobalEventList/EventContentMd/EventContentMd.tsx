import './EventContentMd.scss';
import * as React from 'react';

import IconLocation from '../../Icons/IconLocation';
import { EventContentProps } from '../EventContentLg/EventContentLg';
import PopoverCalendar from '../../PopoverCalendar/PopoverCalendar';
import EventCategoriesList from './EventCategoriesList';
import { getDateTime } from '../../helpers/TimeHelper';
import WatchShopButton from '../../WatchShopButton/WatchShopButton';
import { EventLocation } from '../../helpers/EventHelper';

const EventContentMd= ({ event }: EventContentProps) => {
    const { extraCtas } = event;
    let eventDateString = getDateTime(event.startDate, event.endDate, event.eventLocation !== EventLocation.Barcelona, event.timezoneDisplay);

    const barcelonaVimeoUrl = event.eventLocation === EventLocation.Barcelona ? event.vimeoUrl : null;
    const newyorkBambuserId = event.eventLocation === EventLocation.NewYork ? event.bambuserId : null;

    return (
        <div className="event-content-md">
            <div className="content-header">
                <div className="content-left">
                    <EventCategoriesList categories={event.categories} />

                    <p className="start-date">{eventDateString}</p>
                    <p className="event-title">{event.title}</p>
                </div>
                <div className="content-right">
                    <PopoverCalendar
                        event={{
                            name: event.title,
                            details: event.description??'',
                            location: event.location??'',
                            startsAt: event.startDate,
                            endsAt: event.startDate,
                        }}
                    />
                </div>
            </div>
            <p className="event-location">
                <IconLocation /> <span>{event.location}</span>
            </p>
            <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
            <div className="event-btn-group">
                <a href={event.overrideUrl ?? event.url} className="event-learn-more-button">
                    <button className="btn-learn-more">Learn More</button>
                </a>
                {extraCtas && extraCtas.length
                    ? extraCtas.map((cta) => (
                          <a href={cta.url} className="event-learn-more-button">
                              <button className="btn-learn-more">{cta.label}</button>
                          </a>
                      ))
                    : null}
                {newyorkBambuserId || barcelonaVimeoUrl ? <WatchShopButton event={event} className="event-watch-shop-button" /> : null}
            </div>
        </div>
    );
};
export default EventContentMd;