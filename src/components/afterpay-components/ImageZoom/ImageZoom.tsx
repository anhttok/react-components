import './ImageZoom.scss';

export type ImageZoomProps = {
  src: string;
  ratio?: number[];
  className?: string;
  children?: any;
};

const ImageZoom = ({
  src,
  ratio = [],
  className = '',
  children,
}: ImageZoomProps) => {
  const [ratioWidth, ratioHeight] = ratio;
  let imageBoxStyle = {};
  if (ratioWidth && ratioHeight) {
    const boxPaddingTop = (ratioHeight / ratioWidth) * 100;
    imageBoxStyle = { paddingTop: `${boxPaddingTop}%` };
  }
  return (
    <div className={`c-background-zoom ${className}`}>
      <div className="image-box" style={imageBoxStyle}>
        <div
          className="image-main"
          style={{ backgroundImage: `url('${src}')` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default ImageZoom;
