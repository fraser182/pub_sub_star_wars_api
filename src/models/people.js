const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const People = function(){
  this.people = [];
}
// D and E
People.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:gender-selected', (event) => {
    const selectedGender = event.detail;
    const people = this.findGender(selectedGender);
    // console.log('SelectView:gender-selected', people);
    PubSub.publish('People:all-people-with-selected-gender', people);
    // PubSub.publish('People:all-people-with-selected-gender found', selectedGender);
  });
}

People.prototype.findGender = function(gender){
  return this.people.filter((person) => {
    return person.gender === gender;

  })
}

// store urls to fetch in an array
// const urls = [
//   'https://dog.ceo/api/breeds/list',
//   'https://dog.ceo/api/breeds/image/random'
// ];
//
// // use map() to perform a fetch and handle the response for each url
// Promise.all(urls.map(url =>
//   fetch(url)
//     .then(checkStatus)
//     .then(parseJSON)
//     .catch(logError)
// ))
// .then(data => {
//   // do something with the data
// })

// A
People.prototype.getData = function(){


  const peoplePage1Promise = new Request('https://swapi.co/api/people/?page=1').get();
  const peoplePage2Promise = new Request('https://swapi.co/api/people/?page=2').get();
  const peoplePage3Promise = new Request('https://swapi.co/api/people/?page=3').get();
  const peoplePage4Promise = new Request('https://swapi.co/api/people/?page=4').get();
  const peoplePage5Promise = new Request('https://swapi.co/api/people/?page=5').get();
  const peoplePage6Promise = new Request('https://swapi.co/api/people/?page=6').get();
  const peoplePage7Promise = new Request('https://swapi.co/api/people/?page=7').get();
  const peoplePage8Promise = new Request('https://swapi.co/api/people/?page=8').get();
  const peoplePage9Promise = new Request('https://swapi.co/api/people/?page=9').get();


  allPeople = Promise.all([peoplePage1Promise, peoplePage2Promise, peoplePage3Promise, peoplePage4Promise, peoplePage5Promise, peoplePage6Promise, peoplePage7Promise, peoplePage8Promise, peoplePage9Promise])



  allPeople.then ((allPeoplePagesData) => {
    console.log('testing', allPeoplePagesData);

    // const allPeopleResults = allPeoplePagesData.map((allPeoplePageResults) => {
    //   return allPeoplePageResults.results;
    //   console.log('test with Ally', allPeopleResults);
    // })
    // PubSub.publish('People:people-loaded', this.people);
    // console.log('getALLData', this.people);
  })







    //   request1.get().then((data1) => 6
    //     this.people = data1.results6
    //     console.log('getData1', dat61.results);
    //
    //     const request2 = new Request('https://swapi.co/api/people/?page=2');
    //     request2.get().then((data2) => {
    //       this.people = this.people.concat(data2.results);
    //       // console.log('getData2', data2.results);
    //
    //       const request3 = new Request('https://swapi.co/api/people/?page=3');
    //       request3.get().then((data3) => {
    //         this.people = this.people.concat(data3.results);
    //         // console.log('getData3', data3.results);
    //
    //         const request4 = new Request('https://swapi.co/api/people/?page=4');
    //         request4.get().then((data4) => {
    //           this.people = this.people.concat(data4.results);
    //           // console.log('getData4', data4.results);
    //
    //           const request5 = new Request('https://swapi.co/api/people/?page=5');
    //           request5.get().then((data5) => {
    //             this.people = this.people.concat(data5.results);
    //             // console.log('getData5', data5.results);
    //
    //             const request6 = new Request('https://swapi.co/api/people/?page=6');
    //             request6.get().then((data6) => {
    //               this.people = this.people.concat(data6.results);
    //               // console.log('getData6', data6.results);
    //
    //               const request7 = new Request('https://swapi.co/api/people/?page=7');
    //               request7.get().then((data7) => {
    //                 this.people = this.people.concat(data7.results);
    //                 // console.log('getData7', data7.results);
    //
    //                 const request8 = new Request('https://swapi.co/api/people/?page=8');
    //                 request8.get().then((data8) => {
    //                   this.people = this.people.concat(data8.results);
    //                   // console.log('getData8', data8.results);
    //
    //                   const request9 = new Request('https://swapi.co/api/people/?page=9');
    //                   request9.get().then((data9) => {
    //                     this.people = this.people.concat(data9.results);
    //                     // console.log('getData9', data9.results);
    //                   }).then(() => {
    //                     PubSub.publish('People:people-loaded', this.people);
    //                     console.log('getALLData', this.people);
    //                   });
    //                 });
    //               })
    //             })
    //           })
    //         })
    //       })
    //     })
    //   })
  }

  module.exports = People;
