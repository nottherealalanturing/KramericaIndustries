const services = document.getElementById('services-ul');

let servicesLists = '';

const servicesArrays = [
  {
    img: 'oil-tank.svg',
    name: 'The Oil Bladder System',
    desc: 'A rubber bladder system for oil tankers to put an end to maritime oil spills',
  },
  {
    img: 'periscope.svg',
    name: 'The Car Periscope',
    desc: 'A periscope for a car, so a driver can see further in traffic and make decisions based upon that.',
  },
  {
    img: 'kitten-mitten.svg',
    name: 'Kitten Mittens',
    desc: 'Cloth footwear made specifically for cats.',
  },
  {
    img: 'rumham.svg',
    name: 'Rum-Ham',
    desc: 'Ham steeped and injected with a rum brine, and coated with a rum glaze.',
  },
  {
    img: 'fight.svg',
    name: 'Fight Milk',
    desc: 'Dairy-based protein drink for bodyguards by bodyguards.',
  },
  {
    img: 'wolfcola.svg',
    name: 'Wolf-Cola',
    desc: 'Quaerat corporis cupiditate, maiores molestias, exercitationem quisquam cum!',
  },
  {
    img: 'coffetable.svg',
    name: 'The Coffe Table Book about Coffee Tables',
    desc: 'Quaerat corporis cupiditate, maiores molestias, exercitationem quisquam cum!',
  },
];

const loadServices = () => {
  for (let i = 0; i < servicesArrays.length; i += 1) {
    const literal = `
    <li class="service-item">
    <img
      src="../assets/icons/${servicesArrays[i].img}"
      alt="${servicesArrays[i].name}"
      class="service-item-image"
    />
    <h4 class="service-item-title">${servicesArrays[i].name}</h4>
    <p class="service-item-description">
      ${servicesArrays[i].desc}
    </p>
  </li>`;
    servicesLists += literal;
  }
  services.innerHTML += servicesLists;
};

export default loadServices;
