import { MouseEvent, ReactElement, TouchEvent, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconList from './iconList';
import './styles.scss';
type Props = {
  children: ReactElement;
};

const FloatingActionButton = ({ children }: Props) => {
  const location = useLocation();

  const listPage: string[] = ['/', 'login-form-2', 'afterpay-components'];
  const fabElement = useRef<HTMLDivElement>(null);
  const wrapperElement = useRef<HTMLDivElement>(null);
  const liRefs = useRef<any>([]);
  let oldPositionX: number = 30;
  let oldPositionY: number = 0;

  const move = (e: any) => {
    if (!fabElement.current) {
      return;
    }

    if (!fabElement.current.classList.contains('fab-active')) {
      if (e.type === 'touchmove') {
        fabElement.current.style.top = e.touches[0].clientY + 'px';
        fabElement.current.style.left = e.touches[0].clientX + 'px';
      } else {
        fabElement.current.style.top = e.clientY + 'px';
        fabElement.current.style.left = e.clientX + 'px';
      }
    }
  };
  const mouseDown = (e: MouseEvent | TouchEvent) => {
    if (!fabElement.current) {
      return;
    }
    oldPositionY =
      fabElement.current.style.top !== ''
        ? parseInt(fabElement.current.style.top)
        : 0;
    oldPositionX =
      fabElement.current.style.left !== ''
        ? parseInt(fabElement.current.style.left)
        : 30;
    if (e.type === 'mousedown') {
      window.addEventListener('mousemove', move);
    } else {
      window.addEventListener('touchmove', move);
    }
    if (fabElement.current) {
      fabElement.current.style.transition = 'none';
    }
  };

  const mouseUp = (e: MouseEvent | TouchEvent) => {
    if (e.type === 'mouseup') {
      window.removeEventListener('mousemove', move);
    } else {
      window.removeEventListener('touchmove', move);
    }
    snapToSide(e);
    if (fabElement.current) {
      fabElement.current.style.transition = '0.3s ease-in-out left';
    }
  };
  const snapToSide = (e: any) => {
    if (!fabElement.current || !wrapperElement.current) {
      return;
    }
    const windowWidth = window.innerWidth;
    let currPositionX = 0;
    let currPositionY = 0;
    if (e.type === 'touchend') {
      currPositionX = e.changedTouches[0].clientX;
      currPositionY = e.changedTouches[0].clientY;
    } else {
      currPositionX = e.clientX;
      currPositionY = e.clientY;
    }
    if (currPositionY < 50) {
      fabElement.current.style.top = 50 + 'px';
    }
    if (currPositionY > wrapperElement.current.clientHeight - 50) {
      fabElement.current.style.top =
        wrapperElement.current.clientHeight - 50 + 'px';
    }
    if (currPositionX < windowWidth / 2) {
      fabElement.current.style.left = 30 + 'px';
      fabElement.current.classList.remove('right');
      fabElement.current.classList.add('left');
    } else {
      fabElement.current.style.left = windowWidth - 30 + 'px';
      fabElement.current.classList.remove('left');
      fabElement.current.classList.add('right');
    }
  };

  const onClick = () => {
    if (!fabElement.current) {
      return;
    }
    const fabElementY =
      fabElement.current.style.top !== ''
        ? parseInt(fabElement.current.style.top)
        : 0;
    const fabElementX = fabElement.current.style.left
      ? parseInt(fabElement.current.style.left)
      : 30;

    if (oldPositionY === fabElementY && oldPositionX === fabElementX) {
      fabElement.current.classList.toggle('fab-active');
    }
    if (fabElement.current?.className === 'left fab-active') {
      setStyleLiItems(1);
    } else if (fabElement.current?.className === 'right fab-active') {
      setStyleLiItems(-1);
    } else {
      setStyleLiItems(0);
    }
  };
  const setStyleLiItems = (side: 1 | -1 | 0) => {
    // 1 left, -1 right, 0 clear
    if (liRefs.current) {
      liRefs.current.forEach((element: any, index: number) => {
        element.style.left = `${(index + 1) * 100 * side}%`;
      });
    }
  };
  const renderPageItem = (listPage: string[]) => {
    return listPage.map((item, index) => {
      if (location.pathname.replace('/', '') === item.replace('/', '')) {
        return (
          <li
            key={index}
            className="current-page"
            ref={(el: any) => (liRefs.current[index] = el)}
          >
            <Link to={item}>{index + 1}</Link>
          </li>
        );
      }
      return (
        <li key={index} ref={(el: any) => (liRefs.current[index] = el)}>
          <Link to={item}>{index + 1}</Link>
        </li>
      );
    });
  };
  return (
    <div id="main-wrapper" ref={wrapperElement}>
      <div
        id="floating-snap-btn-wrapper"
        ref={fabElement}
        onClick={onClick}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onTouchEnd={mouseUp}
        onTouchStart={mouseDown}
      >
        <div className="fab-btn">
          <IconList className="fab-btn__icon" />
        </div>
        <ul>{renderPageItem(listPage)}</ul>
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

export default FloatingActionButton;
