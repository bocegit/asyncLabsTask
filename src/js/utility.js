import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { Modal } from 'bootstrap'

const dateFormatter = (d) => {
  // timezone +2
  const date = new Date(d);
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// control the height of the svg element
const adjustSVGHeight = (group, reset) => {
  const svg = select(group.parentNode);
  let height = svg.datum().height;

  if (!reset) {
    const groupHeight = group.getBBox().height;
    const phoneScale = height/90; 
    const padding = 20;
    height = (groupHeight > height) ? (groupHeight + padding) * phoneScale : height;
  }

  svg.transition()
    .duration(800)
    .attr('height', height);
};

const showError = (error) => {
  const errorModal = document.getElementById('errorModal');
  const modal = Modal.getOrCreateInstance(errorModal);
  document.getElementById('errorBox').textContent = error;
  modal.show();
}

export { dateFormatter, adjustSVGHeight, showError }