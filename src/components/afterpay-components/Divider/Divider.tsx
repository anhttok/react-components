import isMobile from 'ismobilejs';
import './Divider.scss';
const Divider = () => {
  if (isMobile().any) {
    return <div className="divider"></div>;
  }
  return null;
};
export default Divider;
