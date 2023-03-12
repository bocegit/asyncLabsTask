const spinner = (target) => {
  const container = document.createElement('div');
  const border = document.createElement('div');
  const spinElement = document.createElement('span');
  container.className = 'd-flex justify-content-center';
  border.className = 'spinner-border';
  border.attributes.role = "status";
  spinElement.className = 'visually-hidden';
  spinElement.textContent = 'Loading...';

  border.appendChild(spinElement);
  container.appendChild(border);
  target.appendChild(container);

  return container;
};

export default spinner;