/**
 * ASCII Hero Background — Knock Labs
 * 
 * Usage:
 *   import { initASCIIHero } from './ascii-hero-module.js';
 *   const destroy = initASCIIHero(document.querySelector('.hero'));
 *   // Call destroy() to clean up (e.g. on route change)
 *
 * Requirements:
 *   - DM Mono font loaded (Google Fonts or self-hosted)
 *   - The hero container must have position: relative (or absolute/fixed)
 *   - A <canvas> will be injected as the first child, position: absolute, inset: 0
 */

export function initASCIIHero(heroEl, options = {}) {
  // ── Config ────────────────────────────────────────────────────────────────
  const config = {
    cellSize:    options.cellSize    ?? 11,       // font size in px
    radius:      options.radius      ?? 4,        // mouse influence radius in cells
    baseOpacity: options.baseOpacity ?? 0.09,     // idle character opacity (0–1)
    accentColor: options.accentColor ?? '#FF4C00',// color at cursor hotspot
    baseColor:   options.baseColor   ?? '#F2F0EB',// idle character color
    chars:       options.chars       ?? ['K','N','O','C','K','·','L','A','B','S','·'],
    // Alternative char sets:
    // blocks: ['░','░','▓','░','▓','▓','░','▓']
    // dots:   ['·','·','∙','·','●','○','·','∙']
    // mixed:  ['░','▓','·','▪','░','░','▓','·']
  };

  // ── Canvas setup ──────────────────────────────────────────────────────────
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '0',
  });
  heroEl.insertBefore(canvas, heroEl.firstChild);
  const ctx = canvas.getContext('2d');

  // ── State ─────────────────────────────────────────────────────────────────
  let W, H, cols, rows, grid;
  let cellW, cellH;
  let mouseX = -9999, mouseY = -9999;
  let t = 0;
  let rafId;
  let destroyed = false;

  function hexToRgb(hex) {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    };
  }

  // ── Grid ──────────────────────────────────────────────────────────────────
  function buildGrid() {
    const FONT_SIZE = config.cellSize;
    cellH = FONT_SIZE * 1.45;
    cellW = FONT_SIZE * 0.65;

    const rect = heroEl.getBoundingClientRect();
    W = canvas.width  = rect.width  || window.innerWidth;
    H = canvas.height = rect.height || window.innerHeight;

    cols = Math.ceil(W / cellW) + 1;
    rows = Math.ceil(H / cellH) + 1;

    grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        char:   config.chars[Math.floor(Math.random() * config.chars.length)],
        heat:   0,
        offset: Math.random() * Math.PI * 2,
      }))
    );
  }

  // ── Draw loop ─────────────────────────────────────────────────────────────
  function draw() {
    if (destroyed) return;
    t += 0.016;

    ctx.clearRect(0, 0, W, H);
    ctx.font = `${config.cellSize}px 'DM Mono', monospace`;

    const accent = hexToRgb(config.accentColor);
    const base   = hexToRgb(config.baseColor);

    // Mouse position relative to hero element
    const rect = heroEl.getBoundingClientRect();
    const mCol = (mouseX - rect.left) / cellW;
    const mRow = (mouseY - rect.top)  / cellH;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = grid[r][c];
        const x = c * cellW;
        const y = r * cellH;

        // Heat from mouse
        const dc = c - mCol;
        const dr = r - mRow;
        const dist = Math.sqrt(dc * dc + dr * dr);
        const influence = Math.max(0, 1 - dist / config.radius);
        const targetHeat = influence * influence;
        cell.heat += (targetHeat - cell.heat) * 0.12;

        // Occasional idle flicker
        const drifting = cell.heat < 0.05 && Math.sin(t * 0.3 + cell.offset) > 0.97;
        if (drifting || (cell.heat > 0.5 && Math.random() < cell.heat * 0.3)) {
          cell.char = config.chars[Math.floor(Math.random() * config.chars.length)];
        }

        // Color: base → accent as heat rises
        const h = cell.heat;
        const blend = Math.min(h * 1.5, 1);
        const finalOpacity = config.baseOpacity + h * (0.85 - config.baseOpacity);
        const r_ = Math.round(base.r + (accent.r - base.r) * blend);
        const g_ = Math.round(base.g + (accent.g - base.g) * blend);
        const b_ = Math.round(base.b + (accent.b - base.b) * blend);

        ctx.fillStyle = `rgba(${r_},${g_},${b_},${finalOpacity.toFixed(3)})`;
        ctx.fillText(cell.char, x, y + config.cellSize);
      }
    }

    if (!document.hidden) rafId = requestAnimationFrame(draw);
  }

  // ── Visibility pause ──────────────────────────────────────────────────────
  function onVisibilityChange() {
    if (!document.hidden && !destroyed) rafId = requestAnimationFrame(draw);
  }

  // ── Mouse tracking ────────────────────────────────────────────────────────
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  // ── Resize ────────────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => buildGrid());
  ro.observe(heroEl);

  // ── Init ──────────────────────────────────────────────────────────────────
  buildGrid();
  window.addEventListener('mousemove', onMouseMove);
  document.addEventListener('visibilitychange', onVisibilityChange);
  rafId = requestAnimationFrame(draw);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  return function destroy() {
    destroyed = true;
    cancelAnimationFrame(rafId);
    ro.disconnect();
    window.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    canvas.remove();
  };
}
