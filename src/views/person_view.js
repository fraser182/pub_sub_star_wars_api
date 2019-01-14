const PubSub = require('../helpers/pub_sub.js');

const PersonView = function(menu){
  this.menu = menu;
};


// B then C
PersonView.prototype.bindEvents = function () {
  PubSub.subscribe('People:people-loaded', (event) => {
    this.populate(event.detail);
  })
  this.menu.addEventListener('click', (event) => {

    // const selectedPerson = event.target.id;
    // PubSub.publish('SelectView:gender-selected', selectedPerson);
  });
}


// AnimalMenuView.prototype.bindEvents = function() {
//   PubSub.subscribe('Animals:all-animals-ready', (event) => {
//     this.populate(event.detail);
//   })
//   // this allows us to setup and addEventListener to the entire menu
//   this.menu.addEventListener('click', (evt) => {
//     const selectedAnimal = evt.target.id;
//     PubSub.publish('AnimalMenuView:selected', selectedAnimal);
//   });
// };

PersonView.prototype.populate = function(uniqueGenders){
  uniqueGenders.forEach((person) => {
    const option = document.createElement('option');
    option.value = person;
    option.textContent = person;
    this.menu.appendChild(option);
  });
}


module.exports = PersonView;
