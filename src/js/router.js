import state from './state'
import urlRoutes from './config/routes'

// create document click that watches the nav links only - event delegation
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => link.classList.remove('active'));
  target.classList.add('active');
  urlRoute();
});

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = () => {
  const container = document.getElementById("content");
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  
  state.global.onScrollLoad = true;
  // empty the container
  container.innerHTML = "";

  // get the route object from the urlRoutes object
  const route = urlRoutes[location] || urlRoutes["404"];

  for (const property in state) {
    if (property !== 'global') {
      const ob = state[property];
      ob.page = 1;

      if (route.name === property) ob.active = true;
      else ob.active = false;
    }
  }

  route.template(container, route.description);
  
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

export { urlLocationHandler, urlRoute };