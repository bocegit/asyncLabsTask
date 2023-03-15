import state from './state'
import urlRoutes from './config/routes'

// create document click that watches the nav links only 
// better aproach is to target them but wanted to showcase event delegation 
document.addEventListener("click", (e) => {
  if (!e.target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

// watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

// handles the url location
const urlLocationHandler = () => {
  const container = document.getElementById("content");
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }

  // add/remove active link form nav
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.attributes.href.value === location) link.classList.add('active');
    else link.classList.remove('active');
  });
  
  // prevent loading content on scroll 
  state.global.onScrollLoad = true;

  // empty the container
  container.innerHTML = "";

  // get the route object from the urlRoutes object
  const route = urlRoutes[location] || urlRoutes["404"];


  // set the state data of the page
  for (const property in state) {
    if (property !== 'global') {
      const ob = state[property];
      ob.page = 1;

      if (route.name === property) ob.active = true;
      else ob.active = false;
    }
  }

  // render the page
  route.template(container, route.description);
  
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

export { urlLocationHandler, urlRoute };