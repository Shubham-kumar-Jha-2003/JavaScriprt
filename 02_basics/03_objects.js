
// Singleton => whenever we are creating a object using Constructor =>  singleton
// Object.create 


// objects literl

const mySym = Symbol("Key1");

const Jsuser = {
    name: "Shubham",
    "full Name": "Shubham Kumar Jha",
    [mySym] : "mykey1",
    age: 20,
    location: "Delhi",
    email: "shubhamkumarjha8855@gmail.com",
    isLoggedIn: false,
    isLoggedInDays: ["Monday", "Saturday"],
}

Jsuser.email = "sjha0636@gmail.com";
// console.log(Jsuser);
// Object.freeze(Jsuser);
// Jsuser.email = "shubhamChatgpt@.com";
// console.log(Jsuser);

Jsuser.gretting = function () {
    // console.log("Hello Js User");
}

Jsuser.grettingTwo = function () {
    console.log(`hello Js User  ${this.name}`);
}

// console.log(Jsuser.gretting)
console.log(Jsuser.gretting());
console.log(Jsuser.grettingTwo());


// console.log(Jsuser.email);
// console.log(Jsuser["email"]);

// console.log(Jsuser.full Name);

// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);


