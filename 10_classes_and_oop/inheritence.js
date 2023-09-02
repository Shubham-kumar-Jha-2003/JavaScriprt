// inheritence

class User {

    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS : ${this.username}`)
    }
}

class Teacher extends User {

    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A Course was added by ${this.username}`)
    }
}

const chai = new Teacher("shubham", "sjha@gmail.com", '774')
console.log(chai)
console.log(chai.addCourse())