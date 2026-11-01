(() => {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      toggle?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
    }
  });
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
