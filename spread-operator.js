const names = ["Mike", "John", "Moses", "Devil"];

const newNames = [...names];
newNames.push("Chima");
console.log(newNames);

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
