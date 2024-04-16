// dates

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

 console.log(typeof myDate);

 let myCreatedate = new Date(2024, 0, 24)
//  let mydate = new Date("2024-04-11");
 let mydate = new Date("04-11-2024");
 console.log(myCreatedate.toDateString());

 console.log(mydate.toLocaleString());

 let myTimeStamp = Date.now();

 console.log(myTimeStamp);
 console.log(myCreatedate.getTime());

 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date();

 console.log(newDate.getMonth())
 console.log(newDate.getDay())

 newDate.toLocaleString('default',{
    weekday:"long"
 })

 console.log(newDate)


 
