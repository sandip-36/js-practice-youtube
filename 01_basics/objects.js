//object part 1

//Singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sandip",
    "full name" : "Sandip Halder",
    [mySym]: "mykey1",
    age: 18,
    location: "Kollata",
    email: "sandiphalder36@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "hellstarsandi36@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "sandip"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("HEllo js user");
}

jsUser.greetingTwo = function(){
    console.log(`HEllo js user, ${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());




//object part 2

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
     email:"sammy@gmail.com",
     fullname : {
        userfullname:{
            firstname:"sandip",
            lastname:"halder"
        }
     }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} it will combined objects like they both are individual objects
// const obj3 = Object.assign({}, obj1, obj2) // it will merged both objects
const obj3 = {...obj1, ...obj2} // it will do the same and much easier way..

console.log(obj3)

const users = [
    {
        id:1,
        email:"sd@gmail.com"
    },
    {
        id:1,
        email:"sd@gmail.com"
    },
    {
        id:1,
        email:"sd@gmail.com"
    }
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); // its gives you all keys in arry
// console.log(Object.values(tinderUser)); //its gives you all values
// console.log(Object.entries(tinderUser)); // its gives you all entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //asking the property is in ther or not it shows in boolean

 

// object part 3

const course = {
    coursename : "js in Hindi",
    price : "999",
    couseInstructer : "sandip"
}

// console.log(course.couseInstructer)  

// const {couseInstructer} = course; // it  can minified the the call of an object 
// console.log(couseInstructer)

const {couseInstructer:instrac} = course; //// it  can minified and create new name for call an object

console.log(instrac)

// {                                        // basically api called json and its how js on looks...

//     "name" = "sandip",                   //its how json looks, similar like object but without declartion
//     "cousreName" = "js in Hindi",
//     "price" = "free"
// }


// [                                    //if json comes in array it looks like this
//     {},
//     {},
//     {}
// ]

























