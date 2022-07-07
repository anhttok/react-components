import * as React from 'react';
import { useMemo } from 'react';
import IconApple from '../Icons/IconApple';
import IconCalendar from '../Icons/IconCalendar';
import IconGoogleCalendar from '../Icons/IconGoogleCalendar';
import IconOutlook from '../Icons/IconOutlook';
import makeUrls, { CalendarEvent } from './makeUrls';
import './PopoverCalendar.scss';

type PopoverCalendarProps = {
  event: CalendarEvent;
  isWhite?: boolean;
  customButton?: React.ReactChild;
};

type CalendarItemProps = {
  children: React.ReactNode;
  filename: boolean | string;
  href: string;
};

const CalendarItem = ({
  children,
  filename = false,
  href,
}: CalendarItemProps) => (
  <a download={filename} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const PopoverCalendar = (props: PopoverCalendarProps) => {
  const { event, isWhite } = props;
  const urls = useMemo(() => makeUrls(event), [event]);
  const filename = event.name;

  const calendarButton = props.customButton ?? (
    <button className="btn-calendar">
      <IconCalendar isWhite={isWhite} />
    </button>
  );

  return (
    <div className="popover-calendar__wrapper">
      {calendarButton}
      <div className="popover__content">
        <div>
          <div className="card-header">
            <div className="card-title">Add to Calendar</div>
          </div>
          <div className="list-content">
            <CalendarItem href={urls.google} filename={filename}>
              <div className="item item-google">
                <IconGoogleCalendar /> <span>Google</span>
              </div>
            </CalendarItem>
            <CalendarItem href={urls.ics} filename={filename}>
              <div className="item item-apple">
                <IconApple /> <span>Apple</span>
              </div>
            </CalendarItem>
            <CalendarItem href={urls.outlook} filename={filename}>
              <div className="item item-outlook">
                <IconOutlook /> <span>Outlook</span>
              </div>
            </CalendarItem>
            <CalendarItem href={urls.ics} filename={filename}>
              <div className="item item-other">
                <IconCalendar /> <span>Other</span>
              </div>
            </CalendarItem>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopoverCalendar;
