import { loadEmployees, loadServices, loadproducts } from './index.js';
if (document.getElementById('productslaunch-ul') !== null) {
  loadproducts();
}

if (document.getElementById('employees-ul') !== null) {
  loadEmployees();
  loadServices();
}

const navIconMobile = document.getElementById('nav-icon');
const navMobile = document.querySelector('.navigation-mobile');
const hero = document.querySelector('.hero');
const services = document.querySelector('.services');
const employees = document.querySelector('.employees');
const partners = document.querySelector('.index-partners');
const footer = document.querySelector('.index-footer');

navIconMobile.addEventListener('click', () => {
  navIconMobile.classList.toggle('open');
  navMobile.classList.toggle('navigation-mobile-open');
  services.style.display !== 'none'
    ? (services.style.display = 'none')
    : (services.style.display = 'flex');
  employees.style.display !== 'none'
    ? (employees.style.display = 'none')
    : (employees.style.display = 'flex');
  footer.style.display !== 'none'
    ? (footer.style.display = 'none')
    : (footer.style.display = 'flex');
  partners.style.display !== 'none'
    ? (partners.style.display = 'none')
    : (partners.style.display = 'flex');
  hero.style.display !== 'none'
    ? (hero.style.display = 'none')
    : (hero.style.display = 'flex');
});
