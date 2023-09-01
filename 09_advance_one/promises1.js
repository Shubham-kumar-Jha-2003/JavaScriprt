


const promiseOne = new Promise(function(resolve, reject) {

    // Do an async task
    // DB calls, crptography, networkcalls

    setTimeout(function() {
        console.log('Async task 1 successfully completed');
        resolve()

    },1000)
})

promiseOne.then(function() {
    console.log('PromiseOne is consumed')

})

new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log('Async task 2 complete')
        resolve();
    },1000)

}).then(function(){

    console.log('Async 2 sucessfully resolved')

})

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve({username: "chai", email: "chai@chaiaurcode.com"})
    },1000)
})

promiseThree.then(function(user) {

    console.log(typeof user)
    console.log(user)

})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "shubham", age: 22 });
    } else {
      reject("ERROR: Something went wrong");
    }
  },1000);
});

promiseFour
  .then((user) => {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javascript", password: 122 });
    } else {
      reject("ERR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log('Err', error)

    }
}

getAllUsers()

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err", err);
  });



fetch('https://api.github.com/users/Shubham-Kumar-jha-2003')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
})