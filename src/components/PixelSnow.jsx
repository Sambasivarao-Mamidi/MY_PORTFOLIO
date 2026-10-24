import { useEffect, useRef } from "react";
import "./PixelSnow.css";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const seeded = (seed) => {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const VARIANTS = ["square", "round", "snowflake"];
const SPRITES = {
  square: [["@"],["oo","oo"],["xox","o@o","xox"],["xoox","o@@o","o@@o","xoox"],["xooox","oo@oo","o@@@o","oo@oo","xooox"],["xox","o@o","xox"],["xoox","o@@o","o@@o","xoox"],["xooox","oo@oo","o@@@o","oo@oo","xooox"]],
  round: [["@"],[".x.","x@x",".x."],[".xx.","x@@x","x@@x",".xx."],[".xxx.","xo@ox","x@@@x","xo@ox",".xxx."],["..xxx..",".xooox.","xoo@oox","xo@@@ox","xoo@oox",".xooox.","..xxx.."],[".xx.","x@@x","x@@x",".xx."],[".xxx.","xo@ox","x@@@x","xo@ox",".xxx."],["..xxx..",".xooox.","xoo@oox","xo@@@ox","xoo@oox",".xooox.","..xxx.."]],
  snowflake: [["@"],[".x.","x@x",".x."],["..x..","x.o.x",".o@o.","x.o.x","..x.."],["...x...",".x.o.x.","..ooo..","xoo@oox","..ooo..",".x.o.x.","...x..."],["....x....",".x..o..x.","..o.o.o..","...ooo...","xooo@ooox","...ooo...","..o.o.o..",".x..o..x.","....x...."],["x...x",".o.o.","..@..",".o.o.","x...x"],["x..x..x",".o.o.o.","..ooo..","xoo@oox","..ooo..",".o.o.o.","x..x..x"],["x...x...x",".o..o..o.","..o.o.o..","...ooo...","xooo@ooox","...ooo...","..o.o.o..",".o..o..o.","x...x...x"]]
};
const CELL = 9;

const BASE_ATLAS_CACHE = new Map();
const TINTED_ATLAS_CACHE = new Map();

function buildAtlas() {
  const variants = VARIANTS.map(v => SPRITES[v]);
  const sizes = [1,2,3,4,5,3,4,5];
  const width = CELL * sizes.length;
  const height = CELL * variants.length;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  const data = ctx.createImageData(width, height);
  variants.forEach((variant, vi) => {
    sizes.forEach((size, si) => {
      const rows = variant[size - 1] || variant[variant.length - 1];
      const startX = si * CELL;
      const startY = vi * CELL;
      for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
          const ch = rows[y][x];
          const px = startX + Math.floor((x / Math.max(1, rows[y].length)) * CELL);
          const py = startY + Math.floor((y / Math.max(1, rows.length)) * CELL);
          const idx = (py * width + px) * 4;
          if (ch === "@") { data.data[idx]=255; data.data[idx+1]=255; data.data[idx+2]=255; data.data[idx+3]=255; }
          else if (ch === "o") { data.data[idx]=230; data.data[idx+1]=210; data.data[idx+2]=255; data.data[idx+3]=255; }
          else if (ch === "x") { data.data[idx]=200; data.data[idx+1]=180; data.data[idx+2]=255; data.data[idx+3]=255; }
        }
      }
    });
  });
  ctx.putImageData(data, 0, 0);
  return canvas;
}

function tintAtlas(baseAtlas, color) {
  const cached = TINTED_ATLAS_CACHE.get(color);
  if (cached) return cached;
  const canvas = document.createElement("canvas");
  canvas.width = baseAtlas.width;
  canvas.height = baseAtlas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return baseAtlas;
  ctx.drawImage(baseAtlas, 0, 0);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "source-over";
  TINTED_ATLAS_CACHE.set(color, canvas);
  return canvas;
}

export default function PixelSnow({
  color = "#B19CFF",
  variant = "snowflake",
  density = 0.25,
  speed = 0.6,
  wind = 0.15,
  flakeSize = 0.7,
  pixelSize = 3,
  twinkle = 0.25,
  mouseInteraction = false,
  opacity = 0.6,
  paused = false,
  className = "",
  style,
  ...rest
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) {
      try { ctx.clearRect(0, 0, canvas.width || 0, canvas.height || 0); } catch {
        /* ignore */
      }
      return undefined;
    }

    const baseAtlas = BASE_ATLAS_CACHE.get(variant) || buildAtlas();
    if (!BASE_ATLAS_CACHE.has(variant)) BASE_ATLAS_CACHE.set(variant, baseAtlas);
    const tinted = tintAtlas(baseAtlas, color);
    const variantIdx = Math.max(0, VARIANTS.indexOf(variant));
    const rng = seeded(4271);

    const setSize = () => {
      const nw = Math.max(1, container.clientWidth || container.offsetWidth || 100);
      const nh = Math.max(1, container.clientHeight || container.offsetHeight || 100);
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;
      canvas.width = Math.floor(nw * dpr);
      canvas.height = Math.floor(nh * dpr);
      canvas.style.width = nw + "px";
      canvas.style.height = nh + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w: nw, h: nh };
    };

    setSize();

    const maxFlakes = Math.max(10, Math.floor(clamp((sizeRef.current.w * sizeRef.current.h * density) / 1400, 15, 250)));
    const flakes = [];
    for (let i = 0; i < maxFlakes; i++) {
      flakes.push({
        x: rng() * sizeRef.current.w,
        y: rng() * sizeRef.current.h,
        vx: (rng() - 0.5) * 0.3,
        vy: (0.35 + rng() * 0.65) * speed,
        r: (0.4 + rng() * 0.6) * flakeSize,
        phase: rng() * Math.PI * 2,
        sprite: Math.floor(rng() * 8)
      });
    }

    let mx = 0, my = 0, hasMouse = false;
    const onMove = (e) => {
      if (!mouseInteraction) return;
      try {
        const rect = container.getBoundingClientRect();
        mx = e.clientX - rect.left;
        my = e.clientY - rect.top;
        hasMouse = true;
      } catch {
        /* ignore */
      }
    };
    const onLeave = () => { hasMouse = false; };
    if (mouseInteraction && typeof window !== "undefined") {
      window.addEventListener("mousemove", onMove, { passive: true });
      container.addEventListener("mouseleave", onLeave);
    }

    const ro = new ResizeObserver(() => {
      try { setSize(); } catch {
        /* ignore */
      }
    });
    ro.observe(container);

    const onVisibility = () => {
      try {
        if (document.hidden) {
          if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; }
        } else if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(draw);
        }
      } catch {
        /* ignore */
      }
    };
    if (typeof window !== "undefined") window.addEventListener("visibilitychange", onVisibility, { passive: true });

    let last = performance.now();
    const draw = (now) => {
      try {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const nw = sizeRef.current.w || Math.max(1, container.clientWidth || 100);
        const nh = sizeRef.current.h || Math.max(1, container.clientHeight || 100);
        ctx.clearRect(0, 0, nw, nh);
        const time = now / 1000;
        for (let i = 0; i < flakes.length; i++) {
          const f = flakes[i];
          let fx = f.x + f.vx + Math.sin(time * 0.35 + f.phase) * 0.2;
          let fy = f.y + f.vy * dt * 60;
          fx += wind * 0.12;

          if (mouseInteraction && hasMouse) {
            const dx = fx - mx;
            const dy = fy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 60 && dist > 0) {
              const force = (60 - dist) / 60;
              fx += (dx / dist) * force * 1.2;
              fy += (dy / dist) * force * 1.2;
            }
          }

          if (fy > nh + 8) { fy = -8; fx = rng() * nw; }
          if (fx < -8) fx = nw + 8;
          if (fx > nw + 8) fx = -8;

          f.x = fx; f.y = fy;

          const tw = twinkle > 0 ? (0.8 + Math.sin(time * 1.5 + f.phase) * twinkle * 0.2) : 1;
          ctx.globalAlpha = opacity * tw;
          const size = Math.max(1, Math.round(f.r * pixelSize));
          try {
            ctx.drawImage(tinted, f.sprite * CELL, variantIdx * CELL, CELL, CELL, fx - size / 2, fy - size / 2, size, size);
          } catch {
            /* ignore */
          }
        }
        ctx.globalAlpha = 1;
      } catch {
        /* ignore */
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try { ro.disconnect(); } catch {
        /* ignore */
      }
      if (typeof window !== "undefined") window.removeEventListener("visibilitychange", onVisibility);
      if (mouseInteraction && typeof window !== "undefined") {
        window.removeEventListener("mousemove", onMove);
        try { container.removeEventListener("mouseleave", onLeave); } catch {
          /* ignore */
        }
      }
      try { ctx.setTransform(1, 0, 0, 1, 0, 0); } catch {
        /* ignore */
      }
    };
  }, [density, speed, wind, flakeSize, pixelSize, color, mouseInteraction, opacity, paused, variant, twinkle]);

  return (
    <div ref={containerRef} className={"pixel-snow-container" + (className ? " " + className : "")} aria-hidden="true" style={style} {...rest}>
      <canvas ref={canvasRef} className="pixel-snow-canvas" />
    </div>
  );
}
