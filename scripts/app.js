import { loadEmployees } from './employees.js';
import { loadServices } from './services.js';
loadEmployees();
loadServices();

const navIconMobile = document.getElementById('nav-icon');
const navMobile = document.querySelector('.navigation-mobile');
const hero = document.querySelector('.hero');
const services = document.querySelector('.services');
const employees = document.querySelector('.employees');
const footer = document.querySelector('.footer');

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
  hero.style.display !== 'none'
    ? (hero.style.display = 'none')
    : (hero.style.display = 'flex');
});
