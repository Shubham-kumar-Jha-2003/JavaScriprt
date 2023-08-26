// for

for(let i=0; i<=10; i++) {

    if(i == 5) {
        // console.log("5 is the best number")
    }
    // console.log(i);
}


for (let i = 0; i < 5; i++) {
    
    // console.log(`outer loop value is : ${i}`)
    
    for (let j = 0; j < 5; j++) {

        // console.log(`inner loop value is : ${j} and ${i}`)
         
   }
}

let myArray = ["Afsha", "Shubham", "Sumit"]

console.log(myArray.length);

for(let index = 0; index < myArray.length; index++) {

    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {

    if(index == 5) {
        console.log(`detected 5`);
        break;
    }
    console.log(`value of index is : ${index}`);
    
}

for (let index = 1; index <= 20; index++) {

    if(index == 5) {
       continue;

    }
    console.log(`value of index is : ${index}`);
    
}