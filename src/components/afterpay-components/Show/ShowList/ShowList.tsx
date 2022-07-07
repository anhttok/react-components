import './ShowList.scss';

import ShowItem, { Show } from '../ShowItem/ShowItem';

export type ShowListProps = {
  shows: Show[];
};

const ShowList = (props: ShowListProps) => {
  const { shows = [] } = props;
  return (
    <div className="show-list-container">
      <div className="show-list-header">
        <p className="title">‘See Now, Buy Now’ Runway Shows</p>
        <p className="description">
          The world’s first runways you can shop live, in person and from home.
        </p>
      </div>
      <div className="show-list-content">
        {shows.map((show, index) => {
          return <ShowItem key={index} show={show} />;
        })}
      </div>
    </div>
  );
};
export default ShowList;
