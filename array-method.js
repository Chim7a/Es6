// Array methods allow us to modify the values inside of an array
// Some of the method return a new of the array that contains the modified values.
// While some method directly modify the values in the original array without returning a new copy

const scores = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(`Original value`);
console.log(scores);

const updatedValues = scores.map((score) => score * 2);

console.log("Updated Values");
console.log(updatedValues);

const students = ["Ahmad", "Zilla", "Emma"];

const appendedNames = students.map((student) => `${student} GoMyCode`);

console.log(appendedNames);

//  Filter Method

const findStudents = scores.filter((score) => score <= 5);
console.log(findStudents);

const footballers = [
  {
    id: "23",
    name: "Messi",
    nationality: "Argentine",
    age: 32,
  },
  {
    id: "3823",
    name: "Rashford",
    nationality: "England",
    age: 32,
  },
  {
    id: "323",
    name: "Anthony",
    nationality: "Brazil",
    age: 25,
  },
  {
    id: "3233",
    name: "Ronaldo",
    nationality: "Portugal",
    age: 38,
  },
];

const englandPlayers = footballers.filter(
  (footballer) => footballer.nationality === "England"
);

console.log(englandPlayers[0].name);

const playersOlderThan20 = footballers.filter(
  (footballer) => footballer.age > 20
);
console.log(playersOlderThan20);

const updatedFootballers = footballers.filter(
  (footballer) => footballer.id !== "3233" && footballer.id !== "23"
);

console.log(updatedFootballers);

const getNames = updatedFootballers.map((name) => name.name);

console.log(getNames);

// Slice method

const favorite = ["Eba", "Noodles", "Rice", "Beans", "Yam", "Egusi"];

const partOfFavoriteFood = favorite.slice(2, 5);

console.log(partOfFavoriteFood);

const woldBest = footballers.find(
  (footballer) => footballer.name === "Anthony"
);

console.log(woldBest.name);
