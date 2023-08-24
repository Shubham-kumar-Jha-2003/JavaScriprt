// Object Part 2 

// Singleton => object.create

// node 02_basics/04_objects.js

const tinderUser = new Object();


tinderUser.id = "123abc";

tinderUser.name = "Shubham";

tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Afsha",
            lastname: "Anzum",
        }

    }
}

// console.log(regularuser.fullname.userfullname);

const obj1 = {name: "Afsha", location: "Punjab"}
const obj2 = {fname: "Shubham", loc: "Delhi"}

const obj3 = {...obj1, ...obj2};

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);


const users = [

    {
        id: 1,
        email: "user1@email.com",
    },
    {
        id: 2,
        email: "user2@email.com",
    },
    {
        id: 1,
        email: "user3@email.com",
    },
]

console.log(users[0].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// // console.log(JSON.stringify(tinderUser));

// console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))




