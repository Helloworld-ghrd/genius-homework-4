const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const openMenu = () => {
  mobileMenu.classList.add('is-open');
};
const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
};

menuBtnOpen?.addEventListener('click', openMenu);
menuBtnClose?.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href') || '';
  closeMenu();

  if (href.startsWith('#')) {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
