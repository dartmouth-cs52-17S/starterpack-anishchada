// console.log('starting up!');

// const $ = require('jquery');

// change require to es6 import style

// Utilized code provided in assignment description throughout this assignment - thank you to Tim and all the TAs

import $ from 'jquery';
import './style.scss';

// Referenced https://www.w3schools.com/jsref/met_win_setinterval.asp
// Referenced https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval2
// Maybe make t a local variable and use let, and take var myVar out because its not necessary?x

let t = 0;
function myTimer() {
  t += 1;
  $('#main').html(`You have been here for ${t} seconds`);
}
// const myVar =
setInterval(() => { myTimer(); }, 1000);
