import { formattedDate } from '../../../../utility';

const postInfo = (target, data) => {
  const row = document.createElement('div');
  row.className = "row";
  const groupCol = document.createElement('div');
  const userCol = document.createElement('div');
  const dateCol = document.createElement('div');
  groupCol.className = "col-4 col-xl-2";
  userCol.className = "col-4 col-xl-2";
  dateCol.className = "col-4 col-xl-4";
  const groupText = document.createElement('p');
  const userText = document.createElement('p');
  const dateText = document.createElement('p');
  groupText.textContent = `Group: ${data.sportGroup.name}`;
  userText.textContent = `Author: ${data.author.name}`;
  dateText.textContent = `Created: ${formattedDate(data.createdAt)}`;

  groupCol.appendChild(groupText);
  userCol.appendChild(userText);
  dateCol.appendChild(dateText);
  row.appendChild(groupCol);
  row.appendChild(userCol);
  row.appendChild(dateCol);
  target.appendChild(row);
};

export default postInfo;