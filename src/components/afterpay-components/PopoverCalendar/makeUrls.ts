import * as dayjs from 'dayjs';

export interface CalendarEvent {
  name: string;
  details: string | null;
  location: string | null;
  startsAt: dayjs.Dayjs;
  endsAt: dayjs.Dayjs;
}

type Query = { [key: string]: null | boolean | number | string };

const makeUrl = (base: string, query: Query) =>
  Object.keys(query).reduce((accum, key, index) => {
    const value = query[key];

    if (value !== null) {
      return `${accum}${index === 0 ? '?' : '&'}${key}=${encodeURIComponent(
        value
      )}`;
    }
    return accum;
  }, base);

const DEFAULT_ISO_FORMAT = 'YYYYMMDD[T]HHmmss';

const makeGoogleCalendarUrl = (event: CalendarEvent) => {
  return makeUrl('https://calendar.google.com/calendar/render', {
    action: 'TEMPLATE',
    dates: `${event.startsAt.format(DEFAULT_ISO_FORMAT)}/${event.endsAt.format(
      DEFAULT_ISO_FORMAT
    )}`,
    location: event.location,
    text: event.name,
    details: event.details,
    ctz: 'America/New_York',
  });
};

const makeOutlookCalendarUrl = (event: CalendarEvent) =>
  makeUrl('https://outlook.live.com/owa', {
    rru: 'addevent',
    startdt: event.startsAt.format('YYYY-MM-DD[T]HH:mm:ss'),
    enddt: event.endsAt.format('YYYY-MM-DD[T]HH:mm:ss'),
    subject: event.name,
    location: event.location,
    body: event.details,
    allday: false,
    uid: new Date().getTime().toString(),
    path: '/calendar/view/Month',
  });

const makeYahooCalendarUrl = (event: CalendarEvent) =>
  makeUrl('https://calendar.yahoo.com', {
    v: 60,
    view: 'd',
    type: 20,
    title: event.name,
    st: event.startsAt.format(DEFAULT_ISO_FORMAT),
    dur: 30,
    desc: event.details,
    in_loc: event.location,
  });

const makeICSCalendarUrl = (event: CalendarEvent) => {
  const components = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT'];

  // In case of SSR, document won't be defined
  if (typeof document !== 'undefined') {
    components.push(`URL:${document.URL}`);
  }

  components.push(
    `DTSTART:${event.startsAt.format(DEFAULT_ISO_FORMAT)}`,
    `DTEND:${event.endsAt.format(DEFAULT_ISO_FORMAT)}`,
    `SUMMARY:${event.name}`,
    `DESCRIPTION:${event.details}`,
    `LOCATION:${event.location}`,
    `VTIMEZONE:America/New_York`,
    'END:VEVENT',
    'END:VCALENDAR'
  );

  return encodeURI(`data:text/calendar;charset=utf8,${components.join('\n')}`);
};

type URLSet = { [key: string]: string };

const makeUrls = (event: CalendarEvent): URLSet => {
  if (typeof event.startsAt !== 'string') {
    event.startsAt = { ...event }.startsAt;
    event.endsAt = event.startsAt.add(30, 'minute');
  }

  return {
    google: makeGoogleCalendarUrl(event),
    outlook: makeOutlookCalendarUrl(event),
    yahoo: makeYahooCalendarUrl(event),
    ics: makeICSCalendarUrl(event),
  };
};

export default makeUrls;
