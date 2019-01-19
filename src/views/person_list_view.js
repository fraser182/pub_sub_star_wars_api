const PubSub = require('../helpers/pub_sub.js');
const PeopleDetailView = require('./people_detail_view.js');

const PersonListView = function(container){
  this.container = container;
};

// A (again)
PersonListView.prototype.bindEvents = function () {
  PubSub.subscribe('People:people-loaded', (event) => {
    this.render(event.detail);
    // console.log('People:people-loaded: SUBSCRIBE = all people loaded', event.detail);
  });
  // F
  PubSub.subscribe('People:all-people-with-selected-gender', (event) => {
    this.container.innerHTML= '';
    this.render(event.detail);
    console.log('People: SUBSCRIBE - all people with selected gender', event.detail);
  });
}


PersonListView.prototype.render = function (people) {
  people.forEach((person) => {
    const personDetail = new PeopleDetailView();
    const personDiv = personDetail.createPersonDetail(person);
    this.container.appendChild(personDiv);
  });
};

// PersonListView.prototype.createDeleteButton = function (sightingId) {
//   const button = document.createElement('button');
//   button.classList.add('delete-btn');
//   button.value = sightingId;
//
//   button.addEventListener('click', (evt) => {
//     PubSub.publish('SightingView:sighting-delete-clicked', evt.target.value);
//   });
//
//   return button;
// };

module.exports = PersonListView;
