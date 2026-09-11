import { matches } from '../core/search.js';
import { renderGrid } from './grid.js';

const getState = (searchEl, chips) => {
  const active = chips.find((c) => c.dataset.active === 'true');
  return {
    query: searchEl ? searchEl.value : '',
    category: active ? active.dataset.value : '',
  };
};

const applyFilters = (data, state, fields) =>
  data.filter((e) =>
    matches(e, state.query, fields) &&
    (state.category === '' || e.category === state.category));

const toggleChip = (chips, chip) => {
  const select = chip.dataset.active !== 'true';
  chips.forEach((c) => {
    c.dataset.active = 'false';
    c.setAttribute('aria-pressed', 'false');
  });
  if (select) {
    chip.dataset.active = 'true';
    chip.setAttribute('aria-pressed', 'true');
  }
};

export function initEncyclopedia({ data, fields = ['name', 'sub', 'text'] }) {
  const list = document.getElementById('list');
  if (!list) return;
  const searchEl = document.getElementById('search');
  const statusEl = document.getElementById('status');
  const chips = Array.from(document.querySelectorAll('.chip'));

  const draw = () => {
    const state = getState(searchEl, chips);
    const result = applyFilters(data, state, fields);
    list.innerHTML = renderGrid(result);
    if (statusEl) {
      statusEl.textContent = `${result.length} из ${data.length}`;
    }
  };

  if (searchEl) searchEl.addEventListener('input', draw);
  chips.forEach((c) => c.addEventListener('click', () => { toggleChip(chips, c); draw(); }));
  draw();
}