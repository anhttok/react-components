import './ShowItem.scss';

import { Dayjs } from 'dayjs';
import IconLocation from '../../Icons/IconLocation';
import PopoverCalendar from '../../PopoverCalendar/PopoverCalendar';

export type Show = {
  startDate: Dayjs;
  endDate: Dayjs;
  url: string;
  title: string;
  leadImageUrl: string;
  location: string;
  description: string;
  backgroundColor: string;
};

export type ShowItemProps = {
  show: Show;
};

export default function ShowItem(props: ShowItemProps) {
  const show: Show = props.show;
  const backgroundImage = `url('${show.leadImageUrl}')`;

  return (
    <div className="show-item-container">
      <div className="lead-image" style={{ backgroundImage }}></div>
      <div className="show-content">
        <div className="content-header">
          <div className="content-left">
            <p className="tag-item">Attend</p>
            <p className="start-date">
              {show.startDate.format('dddd, MMM D @ hA')}
            </p>
            <p className="show-title">{show.title}</p>
          </div>
          <div className="content-right">
            <PopoverCalendar
              event={{
                name: show.title,
                details: show.description,
                location: show.location,
                startsAt: show.startDate,
                endsAt: show.endDate,
              }}
            />
          </div>
        </div>
        <p className="show-location">
          <IconLocation /> <span>{show.location}</span>
        </p>
        <p className="show-description">{show.description}</p>
      </div>
    </div>
  );
}
