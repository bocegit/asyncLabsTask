import { dateFormatter } from '/src/js/utility';

const postInfo = (target, data) => {
  const row = document.createElement('div');
  row.className = "row";
  const groupCol = document.createElement('div');
  groupCol.className = "col-4 col-xl-2";
  const userCol = document.createElement('div');
  userCol.className = "col-4 col-xl-2";
  const dateCol = document.createElement('div');
  dateCol.className = "col-4 col-xl-4";
  const groupText = document.createElement('p');
  groupText.textContent = `Group: ${data.sportGroup.name}`;
  groupText.className = 'fw-bolder';
  const userText = document.createElement('p');
  userText.textContent = `Author: ${data.author.name}`;
  userText.className = 'fw-bolder';
  const dateText = document.createElement('p');
  dateText.textContent = `Created: ${dateFormatter(data.createdAt)}`;
  dateText.className = 'fw-bolder';

  groupCol.appendChild(groupText);
  userCol.appendChild(userText);
  dateCol.appendChild(dateText);
  row.appendChild(groupCol);
  row.appendChild(userCol);
  row.appendChild(dateCol);
  target.appendChild(row);
};

export default postInfo;