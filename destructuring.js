// Object Destructuring

const user = {
  firstName: "Chima",
  birthPlace: "Lagos",
  age: 90,
  favQuote: "Swallow Eba",
};

console.log(user.firstName);
console.log(user.favQuote);

// Alternative way to get object value

const { firstName, favQuote } = user;

console.log(firstName + " " + favQuote);

// Array Destructuring

// const NewStudents = ["Ahmad", "Zilla", "Emma"];

// const favStudents = NewStudents[2];
// console.log(favStudents);

const [, , newStudents] = ["Ahmad", "Zilla", "Emma"];

console.log(newStudents);
