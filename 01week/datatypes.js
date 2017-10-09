'use strict';

//logs current date and time
let displayDate = function (){
  let date = new Date();
  console.log(date);
  console.log(typeof date);
};

displayDate();

//converts value of x to a string
let numtoString = function(){
  let x = 5;
  let string = x.toString();
  console.log(string);
  console.log(typeof string);
};

numtoString();

//converts a number to a string
let turnt = function(x){
  let y = parseInt(x);
  console.log(y);
  console.log(typeof y);
};

turnt('9');

//adds two values fed into 'extra'
let extra = function(a,b){
  let c = a + b;
  console.log(c);
  console.log(typeof c);
};

extra(9,2);

//runs if both conditions are true
const twoTrue = 3;
const threeTrue = 29;

if (threeTrue > 10 && twoTrue < 10) {
  console.log('This statment is true');
} else {
  console.log('This is a lie');
}

//runs if one condition is true
const family = 'mom';
const members = 2;

if ((typeof family === 'string') || (members > 5)){
  console.log('This is a family');
}

//runs if both conditions are false
const fakeNumOne = 1;
const fakeNumTwo = 2;

if (fakeNumOne > 5 && fakeNumTwo > 100) {
  console.log('This statment is super true.');
} else {
  console.log('This statement is super false');
}
