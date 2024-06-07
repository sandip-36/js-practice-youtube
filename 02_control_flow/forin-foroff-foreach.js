// for of this loop is specialiy for array

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const val of arr){
    // console.log(val);
}

const greeting = "Hello World"

for(const greet of greeting){
    // console.log(`each charecter is ${greet}`);
}

//Maps

const code = new Map()

code.set('IN', "India")
code.set('USA', "United States of America")
code.set('FR', "France")
code.set('ITL', "Italy")

// console.log(code);

for(const [key, value] of code){
    // console.log(key, ':-', value);
}


// for in > object is itreable thats why for in loops work in objects. this loop used in object

const myObject = {
    "JS" : 'javascript',
    "RB" : 'Ruby',
    "CPP" : 'C++',
    swift : "swift by apple"
}

for(const key in myObject){
    // console.log(`here is ${key} and here is the ${myObject[key]}`);
}

const programming = ["js", 'ruby', 'python', 'kotlin', 'cpp' ]

for(const arr in programming){
    // console.log(programming[arr]);
}

// for each loop

const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach(function(val){   // call back function not needed any name.
//     console.log(val);
// })

// coding.forEach((item) => {   // call back function with arrow faunction
// console.log(item);
// })

// function printitem(char){  // created function and impliment with foreach loop
//     console.log(char);
// }

// coding.forEach(printitem) //here is implimentation

// coding.forEach((item, index, arr) => { // here i can add multiple values like items, index number , and arrays ** assume these values whatever i want.
//     console.log(item, index, arr);
// })

// important for database how to use for each loop to access each data

const myCoding = [
    {
        fullLanguageName : "Javascript",
        Languagefilename : "Js"
    },
    {
        fullLanguageName : "Python",
        Languagefilename : "Py"
    },
    {
        fullLanguageName : "Java",
        Languagefilename : "java"
    }
]

myCoding.forEach( (item)=> {
    console.log(`here is my language name ${item.fullLanguageName} and this is code name ${item.Languagefilename}`);
} )