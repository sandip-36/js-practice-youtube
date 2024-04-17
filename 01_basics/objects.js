//object

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
console.log(jsUser)

jsUser.greeting = function(){
    console.log("HEllo js user");
}

jsUser.greetingTwo = function(){
    console.log(`HEllo js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
