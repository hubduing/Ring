const TO_TOP = '.to-top';

export function initToTop() {
  const btn = document.querySelector(TO_TOP);
  if (!btn) return;
  const show = () => { btn.hidden = window.scrollY < 400; };
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', show, { passive: true });
  show();
}