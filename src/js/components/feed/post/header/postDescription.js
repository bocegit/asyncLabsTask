const postDescription = (target, data) => { 
  const row = document.createElement('div');
  row.className = "row";
  const imgCol = document.createElement('div');
  const descriptionCol = document.createElement('div');
  imgCol.className = "col-3 col-xl-1";
  descriptionCol.className = "col-9 col-xl-11";
  const img = document.createElement('img');
  img.className = "avatar";
  img.onerror = function(err) {
    this.onerror=null; 
    this.src="assets/laughing.svg";
  };
  img.src = data.athlete.avatar; //data.athlete.avatar;
  const athleteName = document.createElement('p');
  const descriptionText = document.createElement('p');
  athleteName.textContent = `Athlete: ${data.athlete.name}`;
  descriptionText.textContent = `Description: ${data.description}`;

  imgCol.appendChild(img);
  descriptionCol.appendChild(athleteName);
  descriptionCol.appendChild(descriptionText);
  row.appendChild(imgCol);
  row.appendChild(descriptionCol);
  target.appendChild(row);
};

export default postDescription;