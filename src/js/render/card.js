import { paletteFor } from '../data/palettes.js';
import { entryArt } from '../svg/art.js';

const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderCard(entry, uid = 0) {
  const pal = entry.palette || paletteFor(entry.name);
  const style = `style="--accent:${pal.accent};--accent-soft:${pal.soft}"`;
  const tags = Array.isArray(entry.tags) ? entry.tags : [];
  const tagHtml = tags.map((t) => `<span class="card-tag">${esc(t)}</span>`).join('');
  return [
    `<article class="card" ${style}>`,
    '  <div class="card-rule"></div>',
    `  <div class="card-art">${entryArt(entry, 'a' + uid)}</div>`,
    `  <h3>${esc(entry.name)}</h3>`,
    entry.sub ? `  <div class="card-sub">${esc(entry.sub)}</div>` : '',
    '<p class="card-text">' + esc(entry.text) + '</p>',
    tagHtml ? `  <div>${tagHtml}</div>` : '',
    '</article>',
  ].filter(Boolean).join('\n');
}