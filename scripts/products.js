const products = document.getElementById('productslaunch-ul');

let productsLists = '';

const productsArrays = [
  {
    img: 'product-school.jpg',
    year: '2022',
    desc: 'Lorem, ipsum dolor sit amet consectetur',
  },
  {
    img: 'product-school1.jpg',
    year: '2021',
    desc: 'Lorem, ipsum dolor sit amet consectetur',
  },
  {
    img: 'product-school2.jpg',
    year: '2020',
    desc: 'Lorem, ipsum dolor sit amet consectetur',
  },
  {
    img: 'product-school2.jpg',
    year: '2020',
    desc: 'Lorem, ipsum dolor sit amet consectetur',
  },
  {
    img: 'product-school2.jpg',
    year: '2019',
    desc: 'Lorem, ipsum dolor sit amet consectetur',
  },
];

const loadproducts = () => {
  for (let i = 0; i < productsArrays.length; i += 1) {
    const literal = `
    <li class="about-past-item-1">
          <h4 class="about-past-item-year">${productsArrays[i].year}</h4>
          <p class="about-past-item-description">
            ${productsArrays[i].desc}
          </p>
        </li>
       `;
    productsLists += literal;
  }
  products.innerHTML += productsLists;
};

export default loadproducts;
