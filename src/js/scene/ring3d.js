/* =========================================================================
   ring3d.js — настоящее 3D-кольцо Всевластья.
   Тор проецируется из 3D в 2D, непрерывно вращается в пространстве
   (наклон вокруг X + вращение вокруг Y), надпись выгравирована
   на внешней стороне кольца и видна только на обращённой к зрителю
   половине. Палитра следит за темой страницы.
   ========================================================================= */

const TAU = Math.PI * 2;

const PALETTES = {
  dark: {
    bright: '#ffd97a',
    mid: '#c9a961',
    edge: '#8a6d2f',
    ink: '#3a1206',
    inkHi: 'rgba(255,196,90,0.55)',
    hole: '#ff3a1a',
    spark: 'rgba(255,214,120,0.92)',
  },
  light: {
    bright: '#ffe6a4',
    mid: '#d9b36a',
    edge: '#a07e42',
    ink: '#4c1a0a',
    inkHi: 'rgba(255,210,110,0.6)',
    hole: '#ff6a30',
    spark: 'rgba(255,224,140,0.92)',
  },
};

const INSCRIPTION =
  'ASH NAZG DURBATULUK, ASH NAZG GIMBATUL, ASH NAZG THRAKATULUK AGH BURZUM-ISHI KRIMPATUL';

export function initRing3d(id = 'ring3d') {
  const canvas = document.getElementById(id);
  if (!canvas) return null;
  const host = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const paletteNow = () =>
    document.documentElement.dataset.theme === 'light'
      ? PALETTES.light
      : PALETTES.dark;

  let palette = paletteNow();
  // Переключаем палитру при смене темы на странице
  const observer = new MutationObserver(() => {
    palette = paletteNow();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // Детерминированные искры вокруг кольца
  let seed = 1;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const sparks = Array.from({ length: 26 }, () => ({
    v: rnd() * TAU,
    u: rnd() * TAU,
    speed: 0.35 + rnd() * 0.9,
    drift: rnd() * TAU,
    size: 0.6 + rnd(),
  }));

  // Символы надписи
  const chars = INSCRIPTION.split('');

  const STEPS = 150; // сегментов вдоль кольца
  const TUBE = 14;   // точек в сечении трубы

  let w = 0, h = 0, cx = 0, cy = 0, R = 1, rr = 0.2;

  function fit() {
    w = Math.max(320, host.clientWidth || window.innerWidth || 800);
    h = Math.max(240, host.clientHeight || window.innerHeight || 520);
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = w * 0.5;
    cy = h * 0.56;
    R = Math.min(w * 0.2, h * 0.24);
    rr = R * 0.16;
  }
  fit();
  window.addEventListener('resize', fit);

  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
  });

  function frame(now) {
    if (running) draw(now);
    requestAnimationFrame(frame);
  }

  function draw(now) {
    const t = now * 0.001;
    const spin = t * 0.55;                            // вращение "колеса"
    const tilt = 0.52 + Math.sin(t * 0.4) * 0.05;     // лёгкое покачивание
    const py = cy + Math.sin(t * 0.7) * h * 0.012;    // плавное парение

    const sc = Math.cos(spin), ss = Math.sin(spin);
    const tc = Math.cos(tilt), ts = Math.sin(tilt);

    // Вращение точки: Rx(tilt) ∘ Ry(spin)
    const rotW = (x, y, z) => {
      const x1 = x * sc + z * ss;
      const y1 = y;
      const z1 = -x * ss + z * sc;
      const y2 = y1 * tc - z1 * ts;
      const z2 = y1 * ts + z1 * tc;
      return [x1, y2, z2];
    };

    const persp = R * 4.2;
    const proj = (wx, wy, wz, x0 = cx, y0 = py) => {
      const [px, p, pz] = rotW(wx, wy, wz);
      const s = persp / (persp + pz);
      return { px: x0 + px * s, py: y0 - p * s, s, z: pz };
    };

    ctx.clearRect(0, 0, w, h);

    // Тёплый жар в пустоте сердца кольца + мягкая аура снаружи
    const hole = proj(0, 0, 0);
    const outR = (R + rr * 1.4) * hole.s;
    const innerR = (R - rr * 1.2) * hole.s;

    let g = ctx.createRadialGradient(hole.px, hole.py, 0, hole.px, hole.py, outR);
    g.addColorStop(0, palette.hole);
    g.addColorStop(0.35, 'rgba(200,60,10,0.28)');
    g.addColorStop(1, 'rgba(200,60,10,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(hole.px, hole.py, outR, 0, TAU);
    ctx.fill();

    g = ctx.createRadialGradient(
      hole.px, hole.py, innerR * 0.6,
      hole.px, hole.py, outR * 1.15
    );
    g.addColorStop(0, 'rgba(255,214,150,0)');
    g.addColorStop(0.7, 'rgba(255,190,90,0.12)');
    g.addColorStop(1, 'rgba(255,190,90,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(hole.px, hole.py, outR * 1.15, 0, TAU);
    ctx.fill();

    // Сегменты тора (сортировка: дальние рисуем раньше, ближние — поверх)
    const items = [];
    for (let vi = 0; vi < STEPS; vi++) {
      const v = (vi / STEPS) * TAU;
      const cw = Math.cos(v), sw = Math.sin(v);
      const poly = [];
      let zsum = 0;
      for (let ui = 0; ui < TUBE; ui++) {
        const u = (ui / TUBE) * TAU;
        const wrad = R + rr * Math.cos(u);
        const P = proj(wrad * cw, wrad * sw, rr * Math.sin(u));
        poly.push([P.px, P.py]);
        zsum += P.z;
      }
      const outerP = proj((R + rr) * cw, (R + rr) * sw, 0);
      const innerP = proj((R - rr) * cw, (R - rr) * sw, 0);
      items.push({ z: zsum / TUBE, poly, outerP, innerP });
    }
    items.sort((a, b) => b.z - a.z);

    for (const it of items) {
      const gr = ctx.createLinearGradient(
        it.outerP.px, it.outerP.py,
        it.innerP.px, it.innerP.py
      );
      gr.addColorStop(0, palette.bright);
      gr.addColorStop(0.45, palette.mid);
      gr.addColorStop(1, palette.edge);
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.moveTo(it.poly[0][0], it.poly[0][1]);
      for (let i = 1; i < it.poly.length; i++) ctx.lineTo(it.poly[i][0], it.poly[i][1]);
      ctx.closePath();
      ctx.fill();
    }

    // Искры золота, мерцающие вокруг кольца
    for (const sp of sparks) {
      const v = sp.v + t * sp.speed;
      const u = sp.u + t * sp.drift * 0.2;
      const wrad = R + rr * Math.cos(u) * 0.9;
      const P = proj(
        wrad * Math.cos(v),
        wrad * Math.sin(v),
        rr * Math.sin(u) * 0.9
      );
      if (P.s < 0.82) continue; // на дальней стороне — реже
      const rad = Math.max(0.6, (0.12 + sp.size * 0.1) * P.s);
      ctx.fillStyle = palette.spark;
      ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 3 + sp.drift);
      ctx.beginPath();
      ctx.arc(P.px, P.py, rad, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Гравировка надписи — только на обращённой к зрителю половине
    const dOff = TAU / chars.length;
    for (let k = 0; k < chars.length; k++) {
      const ch = chars[k];
      if (ch === ' ') continue;
      const v = (k + 0.5) * dOff;
      const outW = R + rr;
      const n = rotW(Math.cos(v), Math.sin(v), 0);
      if (n[2] <= 0.05) continue; // символ повёрнут спиной

      const A = proj(outW * Math.cos(v - dOff * 0.42), outW * Math.sin(v - dOff * 0.42), 0);
      const B = proj(outW * Math.cos(v + dOff * 0.42), outW * Math.sin(v + dOff * 0.42), 0);

      const span = Math.hypot(B.px - A.px, B.py - A.py);
      if (span < 0.5) continue;
      const ang = Math.atan2(B.py - A.py, B.px - A.px);
      const size = span * 1.3;

      ctx.save();
      ctx.translate(A.px, A.py);
      ctx.rotate(ang);
      ctx.font = `700 ${size}px Georgia, serif`;
      ctx.lineWidth = Math.max(0.6, size * 0.14);
      ctx.strokeStyle = palette.inkHi;
      ctx.strokeText(ch, 0, 0);
      ctx.fillStyle = palette.ink;
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    }
  }

  requestAnimationFrame(frame);
  return canvas;
}