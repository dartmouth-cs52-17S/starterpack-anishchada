// console.log('starting up!');

// const $ = require('jquery');

// change require to es6 import style

// import $ from 'jquery';

// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval2

// Maybe make t a local variable and use let, and take var myVar out because its not necessary?

let t = 0;
function myTimer() {
  t += 1;
  document.getElementById('main').innerHTML = t;
}
// const myVar =
setInterval(() => { myTimer(); }, 1000);
