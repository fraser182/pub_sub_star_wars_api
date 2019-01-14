const PubSub = require('../helpers/pub_sub.js');
const PeopleDetailView = require('./people_detail_view.js');

const PeopleListView = function(container){
  this.container = container;
};

// A (again)
PeopleListView.prototype.bindEvents = function () {
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


PeopleListView.prototype.render = function (people) {
  people.forEach((person) => {
    const personDetail = new PeopleDetailView();
    const personDiv = personDetail.createPersonDetail(person);
    this.container.appendChild(personDiv);
  });
};

module.exports = PeopleListView;
