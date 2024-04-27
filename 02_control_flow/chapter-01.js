// if

// if(condition){
//     scope
// }

const isLoggedIn = true;

const tempreture = 60;


if(2 === "2"){
    console.log("executed");
}

if(tempreture > 50 ){
    console.log("its too hot");
}else{
    console.log("tempreture is average")

}

console.log("executed")

// < , > , <= , >=, == , != , ===

// const score = 200

// if(score > 100){  //now use explicit code
//         const power = "fly"
//         console.log(`user power: ${power}`);
//     }
//     console.log(`user power: ${power}`);

const balance = 1000

// if (balance>500) console.log("test") // now used implecit scope

// if (balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggInfromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggInfromGoogle || loggedInFromEmail){
    console.log("user logged in");
}


// switch case==========>

// switch (key){
//     case value:
//         break;
//         default:
//         break;
// }

const month = 1;

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
        default:
            console.log("Default case match")
            break;
}


// truhty value and fasley value =============>


const useremail = [] // empty array is trtthy value

if (useremail){
    console.log("Got the user email");
}else{
    console.log("Dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, "0","false", " ", [], {}, function(){}

// if(useremail.length === 0){ //this is how you can checked array is empty or not..
//     console.log("Array is empty");
// }

const emptyObj = {} //this is how you can checked object is empty or not..
    if (Object.keys(emptyObj).length === 0){
        console.log("object is empty");
    } 

    // nulish coalescing operator (??) :null undefiend

    let val1;
    // val1 = 5 ?? 10; // this operator worked on null and undefined
    // val1 = null ?? 10;
    val1 = undefined ?? 10 ?? 20; 

console.log(val1);


// Terniary Operator

// condition ? true : fasle

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")











