const score = 400

console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.566

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //its will make your negetive value to positive
console.log(Math.round(4.6));  // its will give you a round value
console.log(Math.ceil(4.2));  // its will gives you lowest rond values
console.log(Math.floor(4.9));  // its will gives you highest round value
console.log(Math.min(4, 3, 6, 8));  //its will gives you minimum value of array
console.log(Math.max(4, 3, 6, 8));  //its will gives you maximum values  of array

console.log(Math.random()); // its will gives you random values
console.log((Math.random()*10)+1); // its will gives you random values but it will be calculate as per value given
console.log(Math.floor((Math.random()*10)+1)); // its will make it lowest round off

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min)