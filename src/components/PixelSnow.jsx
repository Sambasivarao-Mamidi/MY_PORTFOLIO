import { useRef } from 'react';
import './PixelSnow.css';

export default function PixelSnow({
  color = '#B19CFF',
  variant = 'snowflake',
  density = 0.25,
  speed = 0.6,
  wind = 0.15,
  sway = 0.5,
  flakeSize = 0.7,
  pixelSize = 3,
  depth = 0.5,
  brightness = 1,
  glow = 0.5,
  twinkle = 0.25,
  accumulate = false,
  mouseInteraction = false,
  intro = true,
  fade = 0,
  opacity = 0.6,
  lightMode = false,
  paused = false,
  dpr,
  tier = 'high',
  className = '',
  ...rest
}) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`pixel-snow-container${className ? ` ${className}` : ''}`} aria-hidden="true" {...rest} />
  );
}
