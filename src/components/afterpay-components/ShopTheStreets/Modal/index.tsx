import { useEffect, useRef } from 'react';
import 'swiper/swiper.scss';
import useOnClickOutside from '../../hook/useOutsideClick';
import { Size, useWindowSize } from '../../hook/useWindowSize';
import IconClose from '../Icons/IconClose';
import IconLeftControl from '../Icons/IconLeftControl';
import MediaVideoDesktop from '../MediaVideoDesktop/MediaVideoDesktop';
import MediaVideoMobile from '../MediaVideoMobile/MediaVideoMobile';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './index.scss';

const Modal = ({ show, onClose, media, userName, modalVideo }: any) => {
  const size: Size = useWindowSize();
  const ref = useRef(null);

  const leftControlRef = useRef<any>(null);
  const closeControlRef = useRef<any>(null);

  useOnClickOutside(ref, () => {
    onClose();
  });

  useEffect(() => {
    const body = document.body;
    if (!body) {
      return;
    }

    if (show) {
      body.classList.add('lock-scroll');
    } else {
      body.classList.remove('lock-scroll');
    }
  }, [show]);

  useEffect(() => {
    if (leftControlRef?.current) {
      leftControlRef.current.addEventListener('click', onClose);
    }

    if (closeControlRef?.current) {
      closeControlRef.current.addEventListener('click', onClose);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftControlRef, closeControlRef, show]);

  if (!show) {
    return null;
  }

  const getStyleModal = () => {
    let modalHeight,
      heightVideo,
      widthModal,
      paddingTop: number = 0;

    if ((size?.width ?? 0) < 768) {
      modalHeight = size.height;
    } else {
      modalHeight = (size.height ?? 0) - 40;
      if (modalHeight > 1100) {
        modalHeight = 1100;
      }
      heightVideo = modalHeight * 0.65;
      if (heightVideo > 833) {
        heightVideo = 833;
      }
      widthModal = heightVideo * 0.85;
      paddingTop = ((size.height ?? 0) - modalHeight) / 2;
    }
    return { modalHeight, heightVideo, widthModal, paddingTop };
  };
  const styleModal = getStyleModal();
  const handleGetModalVideo = () => {
    if (media?.video?.sizes?.original_converted?.url) {
      return media?.video?.sizes?.original_converted?.url;
    } else return modalVideo.data;
  };
  return (
    <div className="dly-modal">
      <div
        className="dly-modal-content"
        ref={ref}
        style={{
          height: styleModal.modalHeight,
          width: styleModal.widthModal,
          top: styleModal.paddingTop,
        }}
      >
        <div className="media-video-header">
          <div className="center-item">{userName}</div>
        </div>
        <div
          style={{
            height: styleModal.heightVideo,
            width: styleModal.widthModal,
          }}
        >
          <VideoPlayer
            key={handleGetModalVideo()}
            src={handleGetModalVideo()}
            loop
            muted={false}
            controls={true}
            topLeftExternalBtn={
              <>
                <div
                  className="icon-back u-cursor-pointer"
                  ref={leftControlRef}
                >
                  <IconLeftControl />
                </div>
                <div
                  className="icon-close u-cursor-pointer"
                  ref={closeControlRef}
                >
                  <IconClose />
                </div>
              </>
            }
          />
        </div>
        <MediaVideoDesktop media={media} />
        <MediaVideoMobile media={media} />
      </div>
    </div>
  );
};

export default Modal;
