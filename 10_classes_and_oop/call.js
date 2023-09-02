function setUsername(username) {

    // complex DB calls
    
    this.username = username

    console.log('function called technically')

}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@chaiaurcode.com', '123');
console.log(chai);