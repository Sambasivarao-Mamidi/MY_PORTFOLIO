import { useRef } from 'react';
import './Galaxy.css';

export default function Galaxy({
  focal = [0.5, 0.5],
  rotation = [1.0, 0.0],
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  disableAnimation = false,
  speed = 1.0,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0.0,
  mouseRepulsion = true,
  repulsionStrength = 2,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  autoCenterRepulsion = 0,
  transparent = true,
  lightMode = false,
  tier = 'high',
  ...rest
}) {
  const ctnDom = useRef(null);

  return (
    <div ref={ctnDom} className="galaxy-container" aria-hidden="true" {...rest} />
  );
}
