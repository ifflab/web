const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  const iconClosed = navToggle.querySelector('[data-nav-icon-closed]');
  const iconOpen = navToggle.querySelector('[data-nav-icon-open]');

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('flex');
    siteNav.classList.toggle('hidden', !isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (iconClosed) iconClosed.classList.toggle('hidden', isOpen);
    if (iconOpen) iconOpen.classList.toggle('hidden', !isOpen);
  });
}
