const myObject = {

    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python",
    swift: "swift by Apple",
}

for(const keys in myObject) {

    // console.log(`${keys} file for ${myObject[keys]}`)
}


const programming = ["Js", "cpp", "rb", "py", "swift", "html", "css"]

for(const key in programming) {
    console.log(programming[key]);
}