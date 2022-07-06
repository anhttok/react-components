import * as React from 'react';
import { ExpandToShop } from '../ExpandToShop/ExpandToShop';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './VideoItem.scss';

export type VideoItemProps = {
    videoUrl: string;
};

const VideoItem= ({ videoUrl, onClick }: any) => {
    return (
        <>
            <VideoPlayer wrapClassName="video-product" onClick={onClick} key={videoUrl} src={videoUrl} loop />
            <ExpandToShop onClick={onClick} />
        </>
    );
};
export default VideoItem;