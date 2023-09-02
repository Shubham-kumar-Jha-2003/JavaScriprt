
class User {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return `${this._email.toUpperCase()}`
    }

    set email(value) {

        this._email = value

    }

    get password() {
       return `${this._password.toUpperCase()}afsha`
    }

    set password(value) {
       `${ this._password = value}`
    }
}

const shubham = new User('s@shubham.ai', 'shubham')
console.log(shubham.email)
console.log(shubham.password)