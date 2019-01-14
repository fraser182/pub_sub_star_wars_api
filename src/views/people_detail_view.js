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

  const meaningItem = document.createElement('li');
  meaningItem.textContent = `Mass: ${person.mass} kg's`;
  detailList.appendChild(meaningItem);

  const btn = document.createElement('button');
  btn.textContent = 'More Info';
  btn.id = 'more_info';
  detailList.appendChild(btn);

  personDiv.appendChild(detailList);

  return personDiv;
};


module.exports = PeopleDetailView;
;
