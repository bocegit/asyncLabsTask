import postInfo from './header/postInfo';
import postDescription from './header/postDescription';

const header = (target, data) => {
  const header = document.createElement('div');
  header.className = "card-header";
  header.setAttribute('aria-label', 'post info');
  postInfo(header, data);
  postDescription(header, data);

  target.appendChild(header);
};

export default header;