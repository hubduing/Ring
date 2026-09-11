import { paletteFor } from '../data/palettes.js';
import { sigilFor, motif } from './sigils.js';

const UID = () => 'art' + Math.random().toString(36).slice(2, 7);

/* Возвращает полноценную SVG-миниатюру для карточки: фон-градиент по палитре
   + векторный сюжет под запись. uid — для уникальных id градиентов. */
export function entryArt(entry, uid = UID()) {
  const p = entry.palette || paletteFor(entry.name);
  return `<svg class="art-svg" viewBox="0 0 120 120" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.soft}" stop-opacity="0.5"/>
      <stop offset="1" stop-color="${p.accent}" stop-opacity="0.18"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="20" fill="url(#${uid})"/>
  ${motif(sigilFor(entry), p)}
</svg>`;
}