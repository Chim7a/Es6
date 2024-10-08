// Object Spread OP

const userLocation = {
  city: "abuja",
  country: "Nigeria",
  placeOfResidence: "Wuse",
};

const userGMC = {
  name: "Ability",
  age: 20,
  profileSummary: "xyz at at at",
  ...userLocation,
};

console.log(userGMC);

// Array Spread OP

const maleNames = ["Mike", "John", "Moses", "Devil"];
const femalesNames = ["Joy", "Ann", "Peace", "Osas"];

const mixNames = [...maleNames, ...femalesNames];
console.log("Hi" + " " + [...mixNames.map((name) => name)]);
console.log(mixNames);
