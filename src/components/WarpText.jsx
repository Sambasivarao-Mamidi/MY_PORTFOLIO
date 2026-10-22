import { useRef } from 'react';
import './WarpText.css';

const WarpText = ({
  text = '',
  color = '#F4F1FF',
  warpStrength = 0.04,
  warpScale = 1.45,
  speed = 0.18,
  pointerInfluence = 0.25,
  pointerStrength = 0.18,
  refraction = 0.006,
  ripple = false,
  fontSize = 'clamp(2.25rem, 7.5vw, 6.5rem)',
  fontWeight = 800,
  letterSpacing = '-0.04em',
  lineHeight = 1.02,
  align = 'left',
  snapY = 'top',
  className = '',
  style = {},
  tier = 'high'
}) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`warp-text ${className}`.trim()} style={style} role="img" aria-label={text} />
  );
};

export default WarpText;
