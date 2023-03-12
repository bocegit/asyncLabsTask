import postInfo from './header/postInfo';
import postDescription from './header/postDescription';

const header = (target, data) => {
  const header = document.createElement('div');
  header.className = "card-header";

  postInfo(header, data);
  postDescription(header, data);
  // const img = document.createElement('img');
  // img.className = "avatar";
  // img.src = data.athlete.avatar;

  target.appendChild(header);
};

export default header;