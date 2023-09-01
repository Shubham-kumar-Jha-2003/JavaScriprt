const User = {
    
    username: "Shubham",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got user details from database')
        console.log(this.username)
        console.log(typeof this)
    }
}

// console.log(user.loginCount)
// console.log(user.getUserDetails())
// console.log(this)

function user(username, loginCount, isLoggedIn) {

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

// new :- instance(creates a copy )
// new keyword create a instance of my object 

const userOne = new user('sumit', 3, true)

console.log(userOne)

