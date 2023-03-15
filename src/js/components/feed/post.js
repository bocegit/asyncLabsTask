import header from './post/header'
import body from './post/body'
import footer from './post/footer'

const card = (target, data) => {
  const container = document.createElement('div');
  container.className = "card";
  container.setAttribute('aria-label', 'user post');
  header(container, data);
  body(container, data);
  footer(container, data);
  target.appendChild(container);

  return container;
};

export default card;