// const coding = ["js", "cpp", "java", "rb", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( nums => nums > 4)

// console.log(newNums);

let newNums = []

myNums.forEach((num) => {

    if (num > 4) {
        newNums.push(num)
    }

    // console.log(num);
})

// console.log(newNums)

const books = [

    { title: "Book One", genre: "fiction", publish: 1981, edition: 2004 },

    { title: "Book Two", genre: "Non-fiction", publish: 1992, edition: 2008 },

    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },

    { title: "Book Four", genre: "Non-fiction", publish: 2001, edition: 2010},

    { title: "Book Five", genre: "science", publish: 1981, edition: 2004},

    { title: "Book Six", genre: "fiction", publish: 1986, edition: 1996},

    { title: "Book Seven", genre: "History", publish: 2009, edition: 2020},

    { title: "Book Eight", genre: "science", publish: 2011, edition: 2016},

    { title: "Book Nine", genre: "fiction", publish: 1981, edition: 1989},
]

let userBooks = books.filter( (bk) => bk.genre === "History" )

userBooks = books.filter( (bk) => {
    return bk.publish > 1990 && bk.genre === "History";
})


console.log(userBooks);