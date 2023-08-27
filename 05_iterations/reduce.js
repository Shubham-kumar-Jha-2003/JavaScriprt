// Reduce Method


const myNums = [1,2,3]

// let intialValue = 0;

// let totalAccumlateValue = myNums.reduce((accumlator, currentValue) => accumlator + currentValue );

// console.log(totalAccumlateValue);


// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(` acc : ${acc} and  currVal : ${currVal}`)
//     //console.log(acc + currVal)
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => { return acc + currVal}, 0)

// console.log(myTotal);

const shoppinCart = [
    {
        courseName: "js-course",
        coursePrice: 2999,

    },
    {
        courseName: "Node js",
        coursePrice: 3999,

    },
    {
        courseName: "React Js",
        coursePrice: 4500,

    },
]

const priceTopay = shoppinCart.reduce( (acc, course) => (acc + course.coursePrice), 0)

console.log(priceTopay);

