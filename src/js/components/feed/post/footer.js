import menu from './footer/menu';

const footer = (target, data) => {
  const footer = document.createElement('div');
  footer.className = "card-footer";
  menu(footer, data);

  target.appendChild(footer);
};

export default footer;