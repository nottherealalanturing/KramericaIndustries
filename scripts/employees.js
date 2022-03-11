const employees = document.getElementById('employees-ul');

let employeesLists = '';

const employeesArrays = [
  {
    img: 'Frank.jpg',
    name: 'Frank Reynolds',
    role: 'President',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'elaine.webp',
    name: 'Elaine Benes',
    role: 'Director Of Operations',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'raymck.jpeg',
    name: 'Ray McKigney',
    role: 'H.A.N.D',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'art.jpg',
    name: 'Art Vandalay',
    role: 'Architect',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'sueellen.jpg',
    name: 'Sue Ellen Mishkee',
    role: 'Director Of Operations',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'mantis.jpg',
    name: 'Mantis Tobbagan',
    role: 'Managing Director',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'lob.jpg',
    name: 'Bob Loblaw',
    role: 'Attorney',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'diane.jpg',
    name: 'Diane Chambers',
    role: 'Team Lead',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
  {
    img: 'Gil.webp',
    name: 'Gill Chesterton',
    role: 'Director Of Sales',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque.',
  },
];

const loadEmployees = () => {
  for (let i = 0; i < employeesArrays.length; i += 1) {
    const literal = `
    <li class="employees-item">
    <div class="employees-item-image-div">
      <img
        src="assets/images/checkered-pattern.jpg"
        alt="checkered-pattern"
        class="employees-item-image-1"
      />
      <img
        src="assets/images/${employeesArrays[i].img}"
        alt="${employeesArrays[i].name}"
        class="employees-item-image-2"
      />
    </div>

    <div class="employees-item-info">
      <div>
        <h4 class="service-item-info-name">${employeesArrays[i].name}</h4>
        <p class="service-item-info-role">${employeesArrays[i].role}</p>
      </div>
      <p class="service-item-info-description mt-20">
      ${employeesArrays[i].desc}
      </p>
    </div>
  </li>`;
    employeesLists += literal;
  }
  employees.innerHTML += employeesLists;
};

export default loadEmployees;
