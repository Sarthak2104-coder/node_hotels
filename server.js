// console.log("Server is running on port 3000");
// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }

// var add = (a,b) => a+b;
// var result = add(2,9);
// console.log(result); // Output: 5

// (function(){
//     console.log('sarthak');
// })(); // Output: sarthak



// // WAY NO. 1
// const sarthak = () => {
//     console.log('sarthak');
// }
// sarthak(); // Output: sarthak

// function callback(){
//     console.log('This is a call back function');
// }

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result '+ result)
//     callback();
// }
// add(2,3,callback); // Output: This is a call back function

// //WAY NO. 2
// const sub = function(a,b,virat){
//     var result = a-b;
//     console.log('result '+ result)
//     virat();
// }
// sub(2,3,function(){
//     console.log('This is a call back virat function');
// })



// // WAY NO.3

// add(2,3, () => console.log('final hi hai shayad'));
// // Output: This is a call back function


const notes = require('./notes.js');
const _ = require('lodash');

var data = ['sarthak','person','1','1',2,3,2,3,'person','sarthak'];
var uniqueData = _.uniq(data);
console.log(uniqueData);
console.log(_.isString(true));
console.log(_.isString('sarthak'));
var age = notes.age;
var result = notes.addNumbers(age,18);
console.log(age);
console.log('result is '+ result);