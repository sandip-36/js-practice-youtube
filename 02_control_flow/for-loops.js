// for

for(let i = 0; i <= 10; i++){
    const element = i;
    if(i == 5){
        // console.log("5 is unique number");
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++){
    //  console.log(`outer loop value is ${i}`);
     for(let j = 1 ; j <= 10; j++){
        // console.log(`value of inner loop ${j} and inner loop is ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
     }
}



let myArray = ["Flash", "Superman", "Batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// braek and continue

for (let x = 0; x <= 20; x++){
    if(x == 5){
       console.log("five is detected");
       continue
    }else if(x==15){
        console.log("15 detected you cant go further");
        break
    }
    
    console.log(`value of x is ${x}`);
}

























