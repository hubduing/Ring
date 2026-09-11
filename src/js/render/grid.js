import { renderCard } from './card.js';

export function renderGrid(entries, emptyText = 'Ничего не найдено') {
  if (!entries.length) {
    return `<p class="empty">${emptyText}</p>`;
  }
  return entries.map((e, i) => renderCard(e, i)).join('');
}