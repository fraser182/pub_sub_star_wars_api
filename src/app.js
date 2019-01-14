const People = require('./models/people.js')
const PeopleListView = require('./views/people_list_view.js');
const SelectView = require('./views/select_view.js');
// const PersonView = require('./views/person_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");



  const selectElement = document.querySelector('#people-gender')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  // const container2 = document.querySelector('#people-list')
  // const munroList = new PersonView(container);
  // munroList.bindEvents();

  const container = document.querySelector('#people-list')
  const peopleList = new PeopleListView(container);
  peopleList.bindEvents();


  const people = new People();
  people.bindEvents();
  people.getData();

});
