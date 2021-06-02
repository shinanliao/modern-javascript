const moment = require("moment");
const numeral = require("numeral");

console.log("Hello world");
var todaysDate = moment().format("MMM Do YY");
console.log(todaysDate);

console.log("Sanity Check!");
console.log(numeral("23rd"));

let randomNumber = numeral(5923).format("0, 0");
console.log(`This is just a random number: ${randomNumber}`);
