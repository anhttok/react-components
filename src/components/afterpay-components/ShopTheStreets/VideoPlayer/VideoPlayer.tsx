/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import IconPause from '../Icons/IconPause';
import IconPlay from '../Icons/IconPlay';
import IconVolumeOff from '../Icons/IconVolumeOff';
import IconVolumeOn from '../Icons/IconVolumeOn';
import './VideoPlayer.scss';

export type VideoPlayerProps = {
  wrapClassName?: string;
  src: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  topLeftExternalBtn?: JSX.Element;
};

const VideoPlayer = ({
  src,
  wrapClassName = '',
  onClick,
  loop = false,
  controls = false,
  muted = true,
  ...props
}: VideoPlayerProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const refVideo = useRef<any>(null);
  const videoContainerRef = useRef<any>(null);

  const playPauseRef = useRef<any>(null);
  const muteRef = useRef<any>(null);

  const [isPlayVideo, setPlayVideo] = useState<Boolean>(true);
  const [wasMutedVideo, setMutedVideo] = useState<Boolean>(false);
  const [isShowVideoControls, setShowVideoControls] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener('focus', onFocusTab);
    window.addEventListener('blur', onLeaveTab);

    return () => {
      window.removeEventListener('focus', onFocusTab);
      window.removeEventListener('blur', onLeaveTab);
    };
  }, []);

  useEffect(() => {
    if (videoContainerRef?.current) {
      videoContainerRef.current.addEventListener('click', handleClickVideoM);
    }

    if (refVideo?.current) {
      refVideo.current.addEventListener('click', onClick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoContainerRef, refVideo]);

  useEffect(() => {
    playPauseRef?.current?.addEventListener('click', togglePlayVideo);
    muteRef?.current?.addEventListener('click', toggleMuteVideo);

    return () => {
      playPauseRef?.current?.removeEventListener('click', togglePlayVideo);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      muteRef?.current?.removeEventListener('click', toggleMuteVideo);
    };
  }, [muteRef, playPauseRef]);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleCanPlay = () => {
    setLoading(false);
  };

  const togglePlayVideo = () => {
    if (refVideo.current.paused) {
      setPlayVideo(true);
      refVideo.current.play();
    } else {
      setPlayVideo(false);
      refVideo.current.pause();
    }
  };
  const renderPlayPauseBtn = () => {
    if (isPlayVideo) {
      return <IconPause />;
    } else {
      return <IconPlay />;
    }
  };

  const toggleMuteVideo = () => {
    if (refVideo.current.muted) {
      setMutedVideo(false);
      refVideo.current.muted = false;
    } else {
      setMutedVideo(true);
      refVideo.current.muted = true;
    }
  };
  const renderMutedBtn = () => {
    if (wasMutedVideo) {
      return <IconVolumeOff />;
    } else {
      return <IconVolumeOn />;
    }
  };

  const getClassVideoControls = () => {
    if (!isPlayVideo || isShowVideoControls) {
      return 'show';
    } else {
      return 'hide';
    }
  };

  const handleClickVideoM = () => {
    setShowVideoControls(true);
    setTimeout(() => {
      setShowVideoControls(false);
    }, 2000);
  };

  const onFocusTab = () => {
    setPlayVideo(false);
    refVideo.current.pause();
  };
  const onLeaveTab = () => {
    setPlayVideo(false);
    refVideo.current.pause();
  };

  return (
    <div
      onMouseEnter={() => setShowVideoControls(true)}
      onMouseLeave={() => setShowVideoControls(false)}
      className={`c-video-container ${
        loading ? 'c-video-loading' : ''
      } ${wrapClassName}`}
      ref={videoContainerRef}
    >
      <video
        ref={refVideo}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        className="c-video"
        loop={loop}
        autoPlay
        muted={muted}
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      {controls && (
        <>
          <div className={`video-controls ` + getClassVideoControls()}>
            <div className="video-controls__btnPlayPause" ref={playPauseRef}>
              {renderPlayPauseBtn()}
            </div>
            <div className="video-controls__btnMuted" ref={muteRef}>
              {renderMutedBtn()}
            </div>
          </div>
          <div className="video-controls__btnTopLeft">
            {props.topLeftExternalBtn}
          </div>
        </>
      )}

      <div className={'c-video-loader'}></div>
    </div>
  );
};
export default VideoPlayer;
