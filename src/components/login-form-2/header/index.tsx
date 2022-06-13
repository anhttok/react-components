import React from 'react';
import './styles.scss';
type Props = {};

const Header = (props: Props) => {
  const pages = [
    { name: 'Login', url: '#' },
    { name: 'About Us', url: '#' },
    { name: 'Register', url: '#' },
    { name: 'Contact', url: '#' },
  ];
  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          <a href="#" target="_parent" className="header-logo__text">
            <span className="fa fa-key"> </span>
            Key
          </a>
        </h1>
      </div>
      <ul className="header-navigation">
        {pages.map((p) => (
          <li
            key={p.name}
            className={`header-navigation__link ${p.name.toLowerCase().trim()}`}
          >
            <a href={p.url} className={p.name === 'Login' ? 'active' : ''}>
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
