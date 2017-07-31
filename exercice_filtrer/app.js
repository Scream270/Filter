/*var people = {
  Marc: {
    id: "marc",
    type: "poilu"
  },
  Hicham: {
    id: "Hicham",
    type: "chauve"
  }
};*/
// var app = (function app() {
//   "use strict";
//   var ul, body, people;
//
//   ul = document.getElementById('ul');
//   body = document.getElementById('body');
//
//   window.onload = function() {
//
// people = [
//     {
//       id:"Marc",
//       type:"poilu",
//       barbe:"oui"
//     },
//     {
//       id: "Hicham",
//       type: "rasé",
//       barbe: "oui",
//     },
//     {
//     id:"Barbilampino",
//     type:"poilu",
//     barbe:"non",
//   }
//   ];
//     for ( var i = 0; i < people.length; i++) {
//       console.log(people[i]);
//     }
//
// };

  // var tab = people.filter(function(elem) {
  //   return elem.id === "non";
  // });
  // console.log(tab);
// }());

var testElements = document.querySelectorAll("#test li");
console.log(testElements.length);
var testElementsArray = Array.prototype.slice.call(testElements);
var test = [];
// testElementsArray.forEach(function(test) {
// console.log(typeof test);
// test.push(test.textContent);
// });
//
// console.log(test);
