import dayjs from 'dayjs';
import { Fragment } from 'react';
import ContentBody from '../ContentBody/ContentBody';
import Divider from '../Divider/Divider';
import { EventListViewType } from '../types';

import EventItem, { Event, EventTheme } from './EventItem/EventItem';
import './GlobalEventList.scss';

export type GlobalEventListPerRowType = 2 | 3;

export type GlobalEventList = {
  events: Event[];
  type: EventListViewType;
  perRow?: GlobalEventListPerRowType;
  theme?: EventTheme;
  dontRepeatEventDays?: boolean;
  demoPastEvents?: boolean;
  noPastEvents?: boolean;
};

const isPastEvent = (
  event: Event,
  includeInProgress: boolean,
  demoPastEvents: boolean
) => {
  const endDate: dayjs.Dayjs = event.endDate;
  const currentDate = !demoPastEvents
    ? dayjs().tz('America/New_York')
    : dayjs('2021-09-12');
  return (
    currentDate.isAfter(endDate) ||
    (includeInProgress && event.startDate.isBefore(currentDate))
  );
};

const GlobalEventListComponent = (props: GlobalEventList) => {
  const {
    events = [],
    type = 'grid',
    demoPastEvents = false,
    perRow = 3,
    theme,
  } = props;

  events.sort((first, last) => {
    return first.startDate.diff(last.startDate);
  });

  const futureEvents = events.filter(
    (event) => props.noPastEvents || !isPastEvent(event, false, demoPastEvents)
  );
  const pastEvents = events.filter(
    (event) => !props.noPastEvents && isPastEvent(event, true, demoPastEvents)
  );

  const renderListType = (
    events: Event[],
    hideBeforeOrAfter: 'before' | 'after'
  ) => {
    const orderedByDate: { [date: string]: Event[] } = {};
    const currentDate = dayjs();

    events.forEach((event: Event) => {
      const pushEventToDate = (date: dayjs.Dayjs) => {
        const dateKey = date.format('dddd, MMMM Do');

        if (!props.noPastEvents) {
          if (hideBeforeOrAfter === 'before' && date.isBefore(currentDate)) {
            return;
          } else if (
            hideBeforeOrAfter === 'after' &&
            date.isAfter(currentDate)
          ) {
            return;
          }
        }

        if (orderedByDate[dateKey]) {
          orderedByDate[dateKey].push(event);
        } else {
          orderedByDate[dateKey] = [event];
        }
      };

      if (event.endDate) {
        const dayDifference = event.endDate.diff(event.startDate, 'day');

        if (
          dayDifference > 1 &&
          event.endDate.isValid() &&
          !props.dontRepeatEventDays
        ) {
          for (let i = 0; i < dayDifference; i++) {
            pushEventToDate(event.startDate.add(i, 'day'));
          }
        } else {
          pushEventToDate(event.startDate);
        }
      } else {
        pushEventToDate(event.startDate);
      }
    });

    return (
      <div className={`global-event-list-container ${theme || ''}`}>
        {Object.keys(orderedByDate).map((key) => {
          const currentEvents = orderedByDate[key];

          return (
            <Fragment key={key}>
              <div className="event-list-content--title">{key}</div>
              <div className={`event-list-content ${type}`}>
                {currentEvents.map((event: Event, index) => {
                  return (
                    <Fragment key={index}>
                      {events.length > 1 &&
                        type === 'grid' &&
                        theme !== 'nyfw-2022' && <Divider />}
                      <EventItem type={type} event={event} theme={theme} />
                    </Fragment>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  };

  if (type === 'list') {
    return (
      <>
        {renderListType(futureEvents, 'before')}
        {pastEvents.length > 0 && (
          <>
            <div className="past-events-header-container">
              <ContentBody color="">
                <div className="next-header">
                  <div className="next-header--inner">
                    <div className="title">Past events</div>
                  </div>
                </div>
              </ContentBody>{' '}
            </div>
            {renderListType(pastEvents, 'after')}
          </>
        )}
      </>
    );
  }

  return (
    <div className="global-event-list-container">
      <div className={`event-list-content dly-view-${type} grid-${perRow}`}>
        {events.map((event: Event, index: number) => {
          return (
            <Fragment key={index}>
              {events.length > 1 && theme !== 'nyfw-2022' && <Divider />}
              <EventItem type={type} event={event} theme={theme} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default GlobalEventListComponent;
