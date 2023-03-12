import header from './post/header'
import body from './post/body'
import footer from './post/footer'

const card = (target, data) => {
  const container = document.createElement('div');
  container.className = "card";
  header(container, data);
  body(container, data);
  footer(container, data);
  // container.attributes.role = "alert";
  target.appendChild(container);

  return container;
};

export default card;