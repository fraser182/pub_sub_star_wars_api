const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(menu){
  this.menu = menu;
};


// B then C
SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('People:people-loaded', (event) => {
    // console.log('People:people-loaded: SUBSCRIBE all details all people', event.detail);
    const uniqueGenders = this.getUniqueGenders(event.detail)
    // console.log('non duplicate names! ',uniqueGenders);
    this.populate(uniqueGenders);
  })
  this.menu.addEventListener('change', (event) => {
    // console.log('test here', event.target.value);
    const selectedGender = event.target.value;
    console.log('SelectView:gender-selected', selectedGender);
    PubSub.publish('SelectView:gender-selected', selectedGender); // sending a selected gender onyly
  });
}

SelectView.prototype.populate = function(uniqueGenders){
  uniqueGenders.forEach((person) => {
    const option = document.createElement('option');
    option.value = person;
    option.textContent = person;
    this.menu.appendChild(option);
  });
}

SelectView.prototype.getUniqueGenders = function(people){
  const allPersonGenders = people.map((person) => {
    return person.gender;
  });
  const uniqueGenders = [...new Set(allPersonGenders)];
  return uniqueGenders;
};

module.exports = SelectView;
