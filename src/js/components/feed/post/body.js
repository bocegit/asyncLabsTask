import video from './body/video';

const body = (target, data) => {
  const body = document.createElement('div');
  body.className = "card-body";

  video(body, data);

  target.appendChild(body);
};

export default body;