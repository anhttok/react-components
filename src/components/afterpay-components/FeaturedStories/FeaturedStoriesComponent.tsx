import { useEffect, useRef, useState } from 'react';

import './FeaturedStoriesComponent.scss';

import { EventLocation } from '../helpers/EventHelper';
import FeaturedStoryItem from './FeaturedStoryItem/FeaturedStoryItem';

export type FeaturedStoriesComponentProps = {
  showDrafts?: boolean;
  eventLocation?: EventLocation;
};

export default function FeaturedStoriesComponent(
  props: FeaturedStoriesComponentProps
) {
  const [limit, setLimit] = useState<number>(2);
  const [featuredStories, setFeaturedStories] = useState<any[]>([]);

  const buttonRef = useRef<any>(null);

  const location = props.eventLocation ?? EventLocation.NewYork;

  useEffect(() => {
    let cancelled = false;

    return () => {
      cancelled = true;
    };
  }, [location, props.showDrafts]);

  useEffect(() => {
    let cancelled = false;

    buttonRef?.current?.addEventListener('click', () => {
      if (!cancelled) {
        setLimit((oldLimit) => oldLimit + 2);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [buttonRef, featuredStories]);

  return (
    <div className="featured-stories-container">
      <div className="content-list">
        {featuredStories.slice(0, limit).map((story, index) => {
          return <FeaturedStoryItem key={index} story={story} />;
        })}
      </div>
      {limit < featuredStories.length && (
        <div className="footer-info">
          <a ref={buttonRef} href="/" className="btn-show-more">
            Show more
          </a>
        </div>
      )}
    </div>
  );
}
