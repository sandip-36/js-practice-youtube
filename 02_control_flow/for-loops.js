// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`);

        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["Flash", "Superman", "Batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// braek and continue

// for (let index = 1; index <= 20; index++) { //it will break when condition is checked loop will stop there
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i id ${index}`);
    
// }

for (let index = 1; index <= 20; index++) { //it will continue when condition is checked and show all loop value
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i id ${index}`);
    
}























