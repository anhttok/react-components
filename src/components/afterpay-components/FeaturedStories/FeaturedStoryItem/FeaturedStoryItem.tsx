import ImageZoom from '../../ImageZoom/ImageZoom';
import { Editorial } from '../../types/Editorial';
import { FeaturedStory } from '../../types/FeaturedStory';
import './FeaturedStoryItem.scss';

type FeaturedStoryItemProps = {
  story?: FeaturedStory;
  editorial?: Editorial;
};

const FeaturedStoryItem = ({ story, editorial }: FeaturedStoryItemProps) => {
  const dateStr = story?.date?.format('dddd, MMM D');

  if (story) {
    return (
      <div className="c-featured-story-item">
        <ImageZoom
          src={story.image}
          ratio={[1318, 652]}
          className="leading-image"
        />
        <div className="item-info">
          <p className="time">
            {dateStr} • {story.timeToRead}
          </p>
          <p className="title">{story.name}</p>
          <a href={story.overrideUrl ?? story.url} className="btn-read-more">
            Read more
          </a>
        </div>
        <a
          href={story.overrideUrl ?? story.url}
          className="c-featured-story-item--link"
        ></a>
      </div>
    );
  } else {
    return (
      <div className="c-featured-story-item">
        <ImageZoom
          src={editorial?.mobileBgUrl ?? ''}
          ratio={[1318, 652]}
          className="leading-image"
        />
        <div className="item-info">
          <p className="time"></p>
          <p className="title">{editorial?.title}</p>
          <a href={editorial?.url} className="btn-read-more">
            Read more
          </a>
        </div>
        <a href={editorial?.url} className="c-featured-story-item--link"></a>
      </div>
    );
  }
};
export default FeaturedStoryItem;
