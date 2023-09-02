const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor)

// console.log(Math.PI)

const chai = {
  name: "ginger Tea",
  price: 230,
  isAvailabe: true,

  orderChai: function () {
    console.log(`chai nahi ban payi`);
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {

//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :  ${value}`);
  }
}
