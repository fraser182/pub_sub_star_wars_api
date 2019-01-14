const PersonDetailView = function(){

}

PersonDetailView.prototype.createPersonDetail = function (person) {


  const personDiv = document.createElement('div');

  const header = document.createElement('h1')
  header.textContent = person.name;
  personDiv.appendChild(header);

  const detailList = document.createElement('ul');
  const heightItem = document.createElement('li');
  heightItem.textContent = `Height: ${person.height} cms`;
  detailList.appendChild(heightItem);

  const massItem = document.createElement('li');
  massItem.textContent = `Mass: ${person.mass} kg's`;
  detailList.appendChild(massItem);

  const hairColorItem = document.createElement('li');
  hairColorItem.textContent = `Hair Colour: ${person.hair_color}`

  // const btn = document.createElement('button');
  // btn.textContent = 'Exit';
  // btn.id = 'exit';
  // detailList.appendChild(btn);

  personDiv.appendChild(detailList);

  return personDiv;
};


module.exports = PersonDetailView;
;
