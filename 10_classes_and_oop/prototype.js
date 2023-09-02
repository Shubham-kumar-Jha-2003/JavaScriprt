let myName = 'shubhamkumarjha                                '
let chai = 'chai    '

// console.log(myName.truelength())

let myHeros = ['thor', 'spiderman'];

let heroPower = {

    thor: "hammer",
    spiderman: "slingy",
    
    getSpiderPower: function() {

        console.log(`spidy power is : ${this.spiderman}`);
    }
}


Object.prototype.shubham = function() {
    // console.log(`Shubham is present in all objets `)
}

// heroPower.shubham()
// myHeros.shubham()

Array.prototype.heyShubham = function() {
    console.log(`shubham says hello `);
}

// console.log(myHeros.heyShubham())

// heroPower.heyShubham()


// inheritance

const User = {
    
    name: 'chai',
    emai: 'chai@chaiaurcode.com',
    isLoggedIn: true

}

const Teacher = {

    makeVideo: true,
}

const TeachingSupport =  {

    isAvailable: false,

}

const TASupport =  {

    makeAssignment: "Js-assignment",
    __proto__: TeachingSupport


}

// old syntax

// Teacher.__proto__ = User


// Modern ES6 syntax 

// Object.setPrototypeOf(Teacher, TeachingSupport);


let anotherUsername = "ChaiaurCode        "


String.prototype.truLength = function() {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
    // console.log(this.User)
}

myName.truLength()

anotherUsername.truLength()

"AfshaAnzum   ".truLength()

