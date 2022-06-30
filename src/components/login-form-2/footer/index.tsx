import './styles.scss';
type Props = {};

const Footer = (props: Props) => {
  const footerLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms Of Use', url: '#' },
  ];
  return (
    <div className="footer">
      <ul className="footer-links">
        {footerLinks.map((p) => (
          <li key={p.name}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
      <div className="footer-copyright">© All Rights Reserved</div>
    </div>
  );
};

export default Footer;
