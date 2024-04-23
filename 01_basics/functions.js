function sayMYname(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("I");
    console.log("P");
}

// sayMYname()

// function addTwonumbers(number1, number2){  // in parenthesis this called parameters
//     console.log(number1 + number2 );
// }


// addTwonumbers(3, 4) // in parenthesis this called arguements

// const addnum = addTwonumbers(3, 4);

// console.log(addnum);


function addTwonumbers(number1, number2){  // in parenthesis this called parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwonumbers(3, 5)

// console.log("result:", result)


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("sandip")); always print the function otheise it will not show
// console.log(loginUserMessage());  // if the value was undefined


function loginUserMessage(username = "sandip" ){  //this is default value if the value is empty the default value will show
    if(!username){   // same as "username === undefine" result will remain same
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());  // and if you enter a value it will shows the value...

// functions with objects

// function calculateCartPrice(...num1){ //if you its will gives it as array and you can ut multiple values
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ //if you add  val
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : "sandip",
    prices : 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sandi",
    price:399
})


// doing with array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([200, 400, 500, 1000]));

