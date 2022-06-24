import React from 'react';
import './styles.scss';
type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__toggle">
        <a href="#">
          <span className="fa  title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
        </a>
      </div>
      <div className="sidebar__navigation">
        <a href="">
          <span className="fa fa-arrow-left">Back</span>
        </a>
        <a href="">
          <span className="fa fa-download">Download</span>
        </a>
        <a href="">
          <span className="fa fa-shopping-cart">Buy</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
