const names = [
  "khaled",
  "Zoubir",
  "Abderrahmane",
  "Farouk",
  "Chaima",
  "Akrem",
  "Aziz",
];

// console.log(names.length);

names.filter((name) => {
  if (name.length > 8) {
    // console.log(name);
  }
});

for (let i = 0; i < names.length; i++) {
  names[i] += "a";
}

// console.log(names);

// console.log(names.sort());

const numbers = [2, 5, 1, 4, 3, 6, 8, 7, 9];

// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// names[2] = "Malek";

// console.log(names);

// const random = Math.floor(Math.random() * names.length);
// console.log(names[random]);

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  count += numbers[i] / numbers.length;
}
// console.log(count);

// declare an emty array
// declare an array with more than 5 numbers inside
// find the length of the array
// add another number to array
// remove the first number in the array
// sort the array from the biggest to the smallest
// count every number inside the array and log the result

const empty = [];
const arrayWithMoreThanFiveNumbers = [1, 2, 5, 6, 9, 500, 200, 3, 8, 7, 5];
// console.log(arrayWithMoreThanFiveNumbers.length);
arrayWithMoreThanFiveNumbers.push(7);
// console.log(arrayWithMoreThanFiveNumbers);
arrayWithMoreThanFiveNumbers.shift();
// console.log(arrayWithMoreThanFiveNumbers);
arrayWithMoreThanFiveNumbers.sort((a, b) => {
  return b - a;
});
// console.log(arrayWithMoreThanFiveNumbers);
let result = 0;
for (let i = 0; i < arrayWithMoreThanFiveNumbers.length; i++) {
  result += arrayWithMoreThanFiveNumbers[i];
}

// console.log(result);

// get the first item in the array and the middle item and the last item
// console.log(arrayWithMoreThanFiveNumbers[0]);
// console.log(
//   arrayWithMoreThanFiveNumbers[
//     Math.floor(arrayWithMoreThanFiveNumbers.length / 2)
//   ]
// );

// console.log(
//   arrayWithMoreThanFiveNumbers[arrayWithMoreThanFiveNumbers.length - 1]
// );

// declare an array with called mixedDataTypes and put inside different data types
// the array length should be greater than 5
// log the mixedDataTypes array

const mixed = [
  "khaled",
  { name: "chaima" },
  true,
  15,
  null,
  undefined,
  new Date(),
  [1, 2],
];

// console.log(mixed);
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Check if the array of countries contains "Algeria" if not add it to the array and print its length
// print each country

if (countries.includes("algeria")) {
  console.log(true);
} else {
  countries.push("Algeria");
}

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// concat the word "are big countries" to the countries array

console.log(countries.join(",") + " are big countries");
