const PubSub = require('../helpers/pub_sub.js');

const BtnView = function(menu){
  this.menu = menu;
};


// B then C
BtnView.prototype.bindEvents = function () {
  PubSub.subscribe('People:people-loaded', (event) => {
    this.populate(event.detail);
  })
  this.menu.addEventListener('click', (event) => {
    // console.log('test here', event.target.value);
    console.log('testing', event.target.id);
    const selectedGender = event.target.id;
    PubSub.publish('SelectView:gender-selected', selectedGender); // sending a selected gender onyly
  });
}


AnimalMenuView.prototype.bindEvents = function() {
  PubSub.subscribe('Animals:all-animals-ready', (event) => {
    this.populate(event.detail);
  })
  // this allows us to setup and addEventListener to the entire menu
  this.menu.addEventListener('click', (evt) => {
    const selectedAnimal = evt.target.id;
    PubSub.publish('AnimalMenuView:selected', selectedAnimal);
  });
};

BtnView.prototype.populate = function(uniqueGenders){
  uniqueGenders.forEach((person) => {
    const option = document.createElement('option');
    option.value = person;
    option.textContent = person;
    this.menu.appendChild(option);
  });
}

BtnView.prototype.getUniqueGenders = function(people){
  const allPersonGenders = people.map((person) => {
    return person.gender;
  });
  const uniqueGenders = [...new Set(allPersonGenders)];
  return uniqueGenders;
};

module.exports = BtnView;
