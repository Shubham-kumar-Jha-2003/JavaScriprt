// Array Part 2 

const marvel_heros = ["thor", "Ironman", "Spiderman"];

const dc_heros = ["superman", "flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3]);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 6, 7, [8, 9, [2, 3, 4]]]; 

const real_another_array = another_array.flat(2)

// console.log(real_another_array);

console.log(Array.isArray("Shubham"));

console.log(Array.from("Shubham kumar jha"));

console.log(Array.from({name: "Afsha"})); // This is Intersting case for interview perspective

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400


console.log(Array.of(score1, score2, score3, score4));