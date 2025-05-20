// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greet.txt','hiii '+ user.username + '!\n', () => {
//     console.log('file created');  
// });


//import files 
const notes = require('./notes.js');
var age = notes.age;

var addNumbers = notes.addNumbers(age+18,10);
console.log(age);
console.log('result is now: ' + addNumbers);

var _ = require('lodash');
var data = ["person","sarthak",1,2,3,4,5,6,7,8,9,10,"person","sarthak"];
var uniqueData = _.uniq(data);
console.log(uniqueData);