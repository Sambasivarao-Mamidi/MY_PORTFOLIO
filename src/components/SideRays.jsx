import { useRef } from 'react';
import './SideRays.css';

const SideRays = ({
  speed = 2.5,
  rayColor1 = '#EAB308',
  rayColor2 = '#96c8ff',
  intensity = 2,
  spread = 2,
  origin = 'top-right',
  tilt = 0,
  saturation = 1.5,
  blend = 0.75,
  falloff = 1.6,
  opacity = 1.0,
  className = '',
  tier = 'high'
}) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`side-rays-container ${className}`} aria-hidden="true" />
  );
};

export default SideRays;
