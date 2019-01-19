const PeopleDetailView = function(){

}

PeopleDetailView.prototype.createPersonDetail = function (person) {


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

  // const btn = document.createElement('button');
  // btn.textContent = 'More Info';
  // btn.id = 'more_info';
  // detailList.appendChild(btn);

  personDiv.appendChild(detailList);

  return personDiv;
};


module.exports = PeopleDetailView;
;
