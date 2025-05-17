// Values & Variables
// let country = "Indonesia";
// let continent = "Asia";
let population = 275;
// console.log(country);
// console.log(continent);
console.log(population);

// Data Types
// let isIsland = false;
let language;
// console.log(isIsland);
console.log(language);

// let, const, & var
language = "Bahasa Indonesia";
const country = "Indonesia";
const continent = "Asia";
const isIsland = false;
console.log(country);
console.log(continent);
console.log(isIsland);
// isIsland = true;

// Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// Type Conversion and Coercion

console.log("9" - "5"); // -> ? 4
console.log("19" - "13" + "17"); // -> ? "617"
console.log("19" - "13" + 17); // -> ? 23
console.log("123" < 57); // -> ? false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? 1143

// Equality Operators: == vs. ===
// let numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More then 1 border");
// } else {
//     console.log("No borders");
// }

// Logical Operators
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet Your criteria :(`);
}

// The Switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// The Conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
