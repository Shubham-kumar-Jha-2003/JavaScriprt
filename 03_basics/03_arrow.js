// THIS & Arrow in JS

const user = {
    
    username: "Shubham",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to our Website`)
        console.log(this);
    }
}

// console.log(typeof this);

// user.welcomeMessage()

// user.username = "Afsha"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "Afsha Anzum"
//     console.log(this);
// }

// chai();

const chai = () => {
    const username = "Sumit";
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {

//     return num1 + num2;
// }

// console.log(addTwo(3,5))


// const addTwoNumbers = (num1, num2) =>  num1 + num2;

// const addTwoNumbers = (num1, num2) => (num1 + num2)
const addTwoNumbers = (num1, num2) =>( {username: "Shubham Kumar Jha"});


console.log(addTwoNumbers(4,2))
