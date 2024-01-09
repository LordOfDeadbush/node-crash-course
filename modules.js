const { people, ages } = require('./people') // calls the code in people.js

console.log(people, ages);
// console.log(people); this doesnt work because we can only do this from inside the file

const os = require('os');

console.log(os.platform(), os.homedir());