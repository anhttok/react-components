import dayjs from 'dayjs';
import { Event } from '../GlobalEventList/EventItem/EventItem';

export const NYFW_ROOT_URL = '/en-US/nyfw';
export const BFW_ROOT_URL = '/en-GB/080-barcelona-fashion';

export enum EventLocation {
  NewYork = 'newyork',
  Barcelona = 'barcelona',
}

export function parseBuilderEventFromPage(page: any): Event {
  const pageData = page.data;

  let pageCategories: string[] = [];
  if (pageData?.category) {
    pageCategories = Object.keys(pageData?.category)
      .filter((name) => pageData?.category[name])
      .map((name) => {
        // TODO parse this dynamically better
        return name[0].toUpperCase() + name.slice(1);
      });
  }
  const timezoneDisplay = pageData?.timezoneDisplay ?? 'ET';
  const startDate = parseEventDateToTimezone(
    pageData?.date,
    pageData?.eventLocation,
    timezoneDisplay
  );

  return {
    id: page.id,
    startDate: startDate,
    endDate: pageData?.endDate
      ? parseEventDateToTimezone(
          pageData?.endDate,
          pageData?.eventLocation,
          timezoneDisplay
        )
      : startDate,
    url: parseEventUrl(pageData?.url, pageData?.eventLocation),

    overrideUrl: pageData?.overrideUrl,
    vimeoUrl: pageData?.vimeoUrl,

    title: pageData?.title,
    leadImageUrl: pageData?.image,
    location: pageData?.location,
    eventLocation: pageData?.eventLocation,
    description: pageData?.description,
    backgroundColor: pageData?.backgroundColor,
    categories: pageCategories,

    pageImageOverrideUrl: pageData?.imageOverride ?? null,
    seenowBuynowEvent: pageData?.seenowBuynowEvent ?? false,
    bambuserId: pageData?.bambuserId ?? null,
    extraCtas: pageData?.extraCtas ?? null,
    timezoneDisplay: timezoneDisplay,
    disableCta: pageData?.disableCta ?? false,
  };
}

function parseEventUrl(url: string, location: EventLocation) {
  switch (location) {
    case EventLocation.Barcelona:
      return url.replace(NYFW_ROOT_URL, BFW_ROOT_URL);
    default:
      return url;
  }
}

export function getEventPageTitle(event: Event) {
  let title = null;

  if (event?.title) {
    if (event.eventLocation === EventLocation.Barcelona) {
      title = 'BFW Event - ' + event.title;
    } else {
      title = 'NYFW Event - ' + event.title;
    }
  }

  return title;
}

export function getRootPathForLocation(location: EventLocation) {
  if (location === EventLocation.NewYork) {
    return NYFW_ROOT_URL;
  } else if (location === EventLocation.Barcelona) {
    return BFW_ROOT_URL;
  }
}

export function parseEventDateToTimezone(
  date: any,
  timezone?: EventLocation,
  timezoneDisplay?: 'ET' | 'PT'
) {
  if (timezone === EventLocation.Barcelona) {
    return dayjs(date).tz('Europe/Madrid');
  }
  if (timezone === EventLocation.NewYork) {
    if (timezoneDisplay === 'ET') {
      return dayjs(date).tz('America/New_York');
    }
    if (timezoneDisplay === 'PT') {
      return dayjs(date).tz('America/Los_Angeles');
    }
  }
  return dayjs(date).tz('America/New_York');
}

export function getEventTime(event: Event) {
  if (!event) {
    return '';
  }

  const startTime = event.startDate.format('h:mm');
  const startTimeA = event.startDate.format('A');
  const endTime = event.endDate?.format('h:mm');
  const endTimeA = event.endDate?.format('A');

  if (startTimeA === endTimeA) {
    return `@ ${startTime}-${endTime}${endTimeA}`;
  }

  return `@ ${startTime}${startTimeA}-${endTime}${endTimeA}`;
}

export function getEventDateTime(event: Event) {
  if (!event) {
    return '';
  }

  let eventDateString = event.startDate.format('dddd, MMM D');

  if (
    event.endDate &&
    event.endDate.format('D') !== event.startDate.format('D')
  ) {
    eventDateString += '-' + event.endDate.format('D');
  }

  return (
    eventDateString.replace('Sep ', 'SEPT ') +
    event.startDate.format(' @ hA') +
    ' ' +
    event.timezoneDisplay
  );
}
