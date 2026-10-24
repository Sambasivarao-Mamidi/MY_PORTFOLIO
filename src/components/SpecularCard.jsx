import { useRef } from 'react';
import './SpecularCard.css';

const SpecularCard = ({
  children,
  radius = 18,
  _tint = '#ffffff',
  _tintOpacity = 0,
  _blur = 0,
  _textColor = '#f5f5f5',
  _lineColor = '#ffffff',
  _baseColor = '#525252',
  _intensity = 1,
  _shineSize = 10,
  _shineFade = 40,
  _thickness = 1,
  _speed = 0.35,
  _followMouse = true,
  _proximity = 250,
  _autoAnimate = false,
  _disabled = false,
  _onClick,
  className = '',
  _tier = 'high'
}) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`specular-card${className ? ` ${className}` : ''}`}
      style={{ '--sc-radius': `${radius}px` }}
    >
      <span className="specular-card__fx" aria-hidden="true" />
      <span className="specular-card__content">{children}</span>
    </div>
  );
};

export default SpecularCard;
