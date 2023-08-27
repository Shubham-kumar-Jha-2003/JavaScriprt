// IIFE => (function () {}) (); // calling IIFE


// for of loop

// ["", "", ""]

// [{}, {}, {}]

const arr = [1,2,3,4,5]

for(const num of arr) {
    // console.log(num);
}

const greetings = "Hello Moon!"

for(const greet of greetings) {
   
    
    // console.log(`Each char is : ${greet}`);
}

const map1 = new Map()

map1.set("IN", "India")
map1.set("USA", "United State of America ")
map1.set("Fr", "France")

for(const [key, value] of map1) {
    
    console.log(key,  ":-" , value);
}


// console.log(map1.get("IN")) output :- India


const myObj = {
    "game1": "PUBG",
    "game2": "DR.DRIVE",
    "game3": "NFS",
    "game4": "VICE CITY",
    
}

// for(const [key, value] of myObj) {
//     console.log(key, value)
// }