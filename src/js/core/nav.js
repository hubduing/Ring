const fileName = (path) => (path || '').split('/').pop().split('#')[0].split('?')[0];

export function markActive() {
  const here = fileName(window.location.pathname) || 'index.html';
  document.querySelectorAll('#siteNav a').forEach((a) => {
    if (fileName(a.getAttribute('href')) === here) {
      a.setAttribute('aria-current', 'page');
    }
  });
}