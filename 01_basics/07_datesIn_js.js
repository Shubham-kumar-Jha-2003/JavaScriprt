// node 01_basics/07_datesIn_js.js

let myDate = new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof(myDate))

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 14, 23);
// let myCreatedDate = new Date("2023-01-12");  // yy-mm-dd format
let myCreatedDate = new Date("01-12-2023");  // mm-dd-yy this format is use many times in India
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =   Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // This will give me seconds values 


let newDate = new Date()

// console.log(newDate.getHours())
console.log(newDate.getMonth())


newDate.toLocaleString('default', {
    weekday: "long",
   

})









