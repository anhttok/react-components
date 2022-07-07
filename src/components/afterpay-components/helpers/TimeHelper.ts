import { Dayjs } from 'dayjs';

export function getDateTime(startDate: Dayjs, endDate?: Dayjs, easternTime?: boolean, timezoneDisplay?: 'ET' | 'PT') {
    if (!startDate) {
        return '';
    }

    let dateString = startDate.format('dddd, MMM D');

    if (endDate && endDate.format('D') !== startDate.format('D')) {
        dateString += '-' + endDate.format('D');
    }

    return dateString.replace('Sep ', 'SEPT ') + startDate.format(' @ hA') + (easternTime ?? true ? ` ${timezoneDisplay || 'ET'}` : '');
}

export function getTime(startDate: Dayjs, endDate?: Dayjs) {
    if (!startDate) {
        return '';
    }

    const startTime = startDate.format('h:mm');
    const startTimeA = startDate.format('A');
    const endTime = endDate?.format('h:mm');
    const endTimeA = endDate?.format('A');

    if (startTimeA === endTimeA) {
        return `@ ${startTime}-${endTime}${endTimeA}`;
    }

    return `@ ${startTime}${startTimeA}-${endTime}${endTimeA}`;
}
