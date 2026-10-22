import { useRef } from 'react';
import './LightPillar.css';

const LightPillar = ({
  topColor = '#5227FF',
  bottomColor = '#FF9FFC',
  intensity = 1.0,
  rotationSpeed = 0.3,
  interactive = false,
  className = '',
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  mixBlendMode = 'screen',
  pillarRotation = 0,
  quality = 'high',
  lightMode = false,
  tier = 'high'
}) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`light-pillar-container ${className}`} aria-hidden="true" />
  );
};

export default LightPillar;
