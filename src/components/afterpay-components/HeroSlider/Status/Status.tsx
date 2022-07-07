import './Status.scss';

export enum StatusData {
  LIVE = 'Live',
  HAPPENING_NOW = 'Happening Now',
}

export type StatusProps = {
  data?: StatusData;
};

export default function Status(props: StatusProps) {
  const { data } = props;

  if (!data) return null;

  return (
    <div className="slider-status">
      {data === StatusData.LIVE && <div className="is-live"></div>}
      <span className="status-text">{data}</span>
    </div>
  );
}
