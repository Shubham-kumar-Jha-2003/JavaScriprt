// Strings in javaScript

const name = "Shubham";

const repoCount = 5;

// console.log(name + " " + 50 + " value")


// Modern javaScript 

// console.log(`Hello my name is ${name} and my total repo in my github account ${repoCount}  `);

// There has to be another way to declare a string using new keyword. Let's see how we can.

const name1 = new String("Sumit");
// console.log(name1[0]);
// console.log(name1.__proto__); 
// console.log(name1.length); 
// console.log(name1.toLocaleLowerCase()); 

// console.log(name1.toUpperCase())
// console.log(name1.charAt(4));

// console.log(name1.indexOf('t'));

const newString = name1.substring(1,2);
// console.log(newString);

const anotherString = name1.slice(-3, 1); // Sumit
// console.log(anotherString);

const newStringOne = "      Shubham      "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20kumarjha";

// console.log(url.replace("%20", "-"));

// console.log(url.includes("shubham"));

const newStringTwo = "Shubham-kumar-jha-hello";
console.log(newStringTwo.split('-', ))






