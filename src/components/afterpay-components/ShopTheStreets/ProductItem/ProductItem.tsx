import ImageZoom from '../../ImageZoom/ImageZoom';
import './ProductItem.scss';

export type ProductItemProps = {
  url?: string;
  imageUrl: string;
  title?: string;
};

const ProductItem = ({ product }: any) => {
  return (
    <div className="product-detail swiper-lazy">
      <ImageZoom ratio={[4, 5]} src={product.imageUrl}></ImageZoom>
      {product.title && (
        <div className="product-container">
          <p className="name">{product.title}</p>
        </div>
      )}{' '}
    </div>
  );
};
export default ProductItem;
