import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
export const convertBuilderToDayJs = (builderDate: string) => {
  const date = dayjs(builderDate).tz('America/New_York');
  return date;
};
