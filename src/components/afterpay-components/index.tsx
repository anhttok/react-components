import 'antd/dist/antd.min.css';
import ShopTheStreetsComponent from './ShopTheStreets/ShopTheStreetsComponent';
import './styles/index.styles.scss';
type Props = {};

const AfterpayComponents = (props: Props) => {
  return (
    <div className="afterpay-components">
      <ShopTheStreetsComponent
        galleryId="652349"
        title="Shop the streets"
        description="Fashion week"
        overrideInfoInfluencers={[]}
      />
    </div>
  );
};

export default AfterpayComponents;
