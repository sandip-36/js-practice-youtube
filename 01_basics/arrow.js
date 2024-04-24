const user = {
    username : "sandip",
    price : 999,

    welcomemessage: function(){
        // console.log(`${this.username} , welcome to website`); // used this for current context
        // console.log(this)
    }
}
// user.welcomemessage()
// user.username = "sandi"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     console.log(this);
//     console.log(this.username) // you can not print user coz you can not use this in function
// }

// chai()


// const chai = function(){
//     console.log(this);
//     console.log(this.username) // you can not print user coz you can not use this in function
// }

// chai()

const chai = () => { // this is how used arrow function
    console.log(this);
    console.log(this.username)
}

// chai()

// () => {}   // basic arrow function

// const addtwo = (num1, num2) => { //basic arrow function
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2 // emplicit return arrow function
// const addtwo = (num1, num2) => (num1 + num2 ) 
const addtwo = (num1, num2) => ({username:"sandip"}) //if you want to add object you need to add parenthesis in emplicit arrow function

console.log(addtwo(3, 4))