const KEY = 'lotr-theme';
const LIGHT = 'light';

const read = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};

const write = (v) => {
  try {
    if (v) localStorage.setItem(KEY, v);
    else localStorage.removeItem(KEY);
  } catch { /* ignore */
  }
};

export const isLight = () => document.documentElement.dataset.theme === LIGHT;

export function setTheme(light) {
  const root = document.documentElement;
  if (light) root.dataset.theme = LIGHT;
  else delete root.dataset.theme;
  write(light ? LIGHT : null);
}

export function toggleTheme() {
  setTheme(!isLight());
}

export function initTheme() {
  setTheme(read() === LIGHT);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}