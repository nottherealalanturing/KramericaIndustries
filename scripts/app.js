const navIconMobile = document.getElementById('nav-icon');
const navMobile = document.querySelector('.navigation-mobile');

navIconMobile.addEventListener('click', () => {
  navIconMobile.classList.toggle('open');
  navMobile.classList.toggle('navigation-mobile-open');
});
