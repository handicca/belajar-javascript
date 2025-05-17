// Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndonesia = describeCountry("Indonesia", 275, "Jakarta");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descIndonesia, descGermany, descFinland);

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percInd1 = percentageOfWorld1(275);

console.log(percPortugal1, percChina1, percInd1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percInd2 = percentageOfWorld2(275);

console.log(percPortugal2, percChina2, percInd2);

// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percInd3 = percentageOfWorld3(275);

console.log(percPortugal3, percChina3, percInd3);

// Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld2(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Indonesia", 275);
describePopulation("Portugal", 10);
describePopulation("China", 1441);

// Introduction to Arrays
const populations = [275, 10, 1441, 6];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic Array Operations (methods);
const neighbours = ["Malaysia", "Timor Leste", "Papua New Guinea"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Timor Leste")] = "Timor Timor";
console.log(neighbours);

// Introduction to Objects

const myCountry = {
  country: "Indonesia",
  capital: "Jakarta",
  language: "Bahasa Indonesia",
  population: 275,
  neighbours: ["Malaysia", "Timor Leste", "Papua New Guinea"],

  // Object Methods
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;
    // Even simpler version (see why this works...)
    this.isIsland = !Boolean(this.neighbours.length);
  },
};

// Dot vs. Bracket Notation
//  'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// Object Methods
myCountry.describe();
myCountry.checkIsIsland();

console.log(myCountry);

// Iteration: The for Loop
for (let voter = 0; voter < 50; voter++) {
  console.log(`Voter number ${voter + 1} is currently voting`);
}

// Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}

// The While Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
