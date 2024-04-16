// Array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["batman", "superman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0])

// Array Methods

// myArr.push(6) add  elements on order
// myArr.push(7)
// myArr.pop() removes elements on oreder


// myArr.unshift(9) add elements from start
// myArr.shift() removes elements from start

// console.log(myArr.includes(9)); its question the array "is 9 included in array"
// console.log(myArr.indexOf(3)); its shows the index number of an array

// const newArr = myArr.join() its join by specific elements.

// console.log(myArr)
// console.log(newArr)

// slice splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr)

// const myn2 = myArr.splice(1, 3)
// console.log(myn2)

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) it will add an array as a data its not good for merging arrays

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes); its will create a new array and concat or maerged the arrayes 
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] its called spread, its an updated method which used to concatinated arrayes. 
// console.log(all_new_heroes)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Sandip")) // asking is it the array
console.log(Array.from("Sandip")) // converting to the array...

console.log(Array.from({name: "Sandip"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));





