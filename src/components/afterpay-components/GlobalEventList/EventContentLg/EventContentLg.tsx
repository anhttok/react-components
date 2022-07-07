import './EventContentLg.scss';
import * as React from 'react';
import IconLocation from '../../Icons/IconLocation';
import { Event } from '../EventItem/EventItem';
import PopoverCalendar from '../../PopoverCalendar/PopoverCalendar';
import { getTime } from '../../helpers/TimeHelper';

export type EventContentProps = {
    event: Event;

    hideLearnMore?: boolean,
};

const EventContentLg= ({ event }: EventContentProps) => {

    return (
        <div className="event-content-lg">
            <div>
                    <div className="categories-list">
                        {event.categories.map((category) => {
                            return <p key={category} className="tag-item">{category}</p>;
                        })}
                    </div>
                <div className="time-content time-content-lg">
                    <p className="time">{getTime(event.startDate, event.endDate)}</p>
                </div>
                <p className="event-title">{event.title}</p>
            </div>
            <div className="time-content time-content-xl">
                <p className="time">{getTime(event.startDate, event.endDate)}</p>
            </div>

            <div className="location-content">
                <p className="location">
                    <IconLocation /> <span>{event.location}</span>
                </p>
            </div>
            <div className="btn-calendar-content">
            <PopoverCalendar
                event={{
                    name: event.title,
                    details: event.description,
                    location: event.location,
                    startsAt: event.startDate,
                    endsAt: event.endDate,
                }}
            />
            </div>
        </div>
    );
};
export default EventContentLg;