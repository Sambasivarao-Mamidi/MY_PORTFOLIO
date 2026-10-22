import { useRef } from 'react';
import './SpecularCard.css';

const SpecularCard = ({
  children,
  radius = 18,
  tint = '#ffffff',
  tintOpacity = 0,
  blur = 0,
  textColor = '#f5f5f5',
  lineColor = '#ffffff',
  baseColor = '#525252',
  intensity = 1,
  shineSize = 10,
  shineFade = 40,
  thickness = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  tier = 'high'
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
