const People = require('./models/people.js')
const PeopleListView = require('./views/people_list_view.js');
const SelectView = require('./views/select_view.js');
// const ButtonView = require('./views/button_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");



  const selectElement = document.querySelector('#people-gender')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const container = document.querySelector('#people-list')
  const munroList = new PeopleListView(container);
  munroList.bindEvents();


  const munros = new People();
  munros.bindEvents();
  munros.getData();

});
