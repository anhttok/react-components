import { useEffect, useRef } from 'react';
import './ShopTheStreetsStoryItem.scss';

export type ShopTheStreetsStory = {
  id: string;
  avatarImageUrl: string;
  accountName: string;
};

const ShopTheStreetsStoryItem = ({ user, onClick, currentUserId }: any) => {
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentRef?.current) {
      currentRef.current.addEventListener('click', () => {
        onClick(user.id);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRef]);

  const checkActive = () => {
    if (user.id === currentUserId) {
      return 'active';
    }
    return 'inactive';
  };

  return (
    <div className="c-shop-the-streets-story-item" ref={currentRef}>
      <a
        href={user.linkStory}
        aria-label="story"
        target="_parent"
        className="link-story"
      >
        <div className={'border-story ' + checkActive()}>
          <div
            style={{
              backgroundImage: `url('${user.avatarImageUrl}')`,
            }}
            className="story-image"
          ></div>
        </div>
        <p className={'name-account ' + checkActive()}>{user.accountName}</p>
      </a>
    </div>
  );
};
export default ShopTheStreetsStoryItem;
