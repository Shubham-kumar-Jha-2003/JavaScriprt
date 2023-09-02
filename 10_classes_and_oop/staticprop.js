class User {

    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS : ${this.username}`)
    }

    static creteID() {
        return '13'
    }
}

const shubham = new User("shubham");
// console.log(shubham.creteID())
// shubham.logMe()

console.log(shubham)

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
}

const iphone = new Teacher('iphone', 'iphone.com')

console.log(iphone)