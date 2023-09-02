// ES6

// class User {

//     constructor(username, email, password) {

//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//        return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai', "chai@fb.com", "123");
// console.log(chai.encryptPassword())

// console.log(chai.changeUsername())


// behind the scene

function User (username, email, password) {

    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}qbhs`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const userone = new User('chai', 'chaiaurcode@google.com', "123")

// console.log(userone.encryptPassword())
console.log(userone.encryptPassword())
console.log(userone.changeUsername())