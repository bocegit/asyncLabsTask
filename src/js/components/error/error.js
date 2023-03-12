const error = (target, msg) => {
  const container = document.createElement('div');
  container.className = "alert alert-danger";
  container.attributes.role = "alert";
  // Element.innerHTML returns HTML, as its name indicates. Sometimes people use innerHTML to retrieve 
  // or write text inside an element, but textContent has better performance because its value is not 
  // parsed as HTML. Moreover, using textContent can prevent XSS attacks
  container.textContent = msg;
  target.appendChild(container);

  return container;
};

export default error;