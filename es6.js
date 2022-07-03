// ES => ECMAScript 6
// Latest version => 2015

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((num) => {
  if (num > 5) {
    console.log(num);
  }
});

console.log("-----------------------------------------------------------");

arr.map((num) => {
  console.log(num + 1);
});
console.log(arr);

console.log("-----------------------------------------------------------");

arr.sort((a, b) => {
  return b - a;
});
console.log(arr);

console.log("-----------------------------------------------------------");

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 3;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue - currentValue,
  initialValue
);

console.log(sumWithInitial);

console.log("-----------------------------------------------------------");

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

console.log("-----------------------------------------------------------");

function test(callback) {
  console.log("This is a callback function");
  callback();
}

test(() => {
  let sum = 100;
  let result = 50;
  console.log(sum < result ? true : false);
});

console.log("-----------------------------------------------------------");

const arrowFunction = (num) => {
  console.log(num);
}; //arrow function

arr.filter(arrowFunction);

console.log("-----------------------------------------------------------");

const namee = "khaled";
const emaile = "khaled@gmail.com";

console.log(namee + " " + emaile);
console.log(`${namee} ${emaile}`);

console.log("-----------------------------------------------------------");

// desctructering
const obj = {
  name: "hahahh",
  email: "dnkabdakbd",
  password: ",ckqbclqdbvl",
};

const { password, name, email } = obj;
console.log(password, name, email);

console.log("-----------------------------------------------------------");

let copy = ["khaled", "Zoubir"];
let copy2 = ["Zouhir", "Dahman"];

copy2 = [...copy2, "Miloud", "salim"];
const allNames = [...copy, ...copy2];

console.log(allNames);

// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }

// console.log(removeExclamationMarks("hello!!"));

// function feast(beast, dish) {
//   //your function here
//   let firstStr = beast[0];
//   let firstDish = dish[0];
//   let lastStr = beast[beast.length - 1];
//   let lastDish = dish[dish.length - 1];

//   console.log(firstStr, firstDish, lastStr, lastDish);

//   if (firstStr === firstDish && lastStr === lastDish) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(feast("great blue heron", "garlic naan"), true);
// console.log(feast("chickadee", "chocolate cake"), true);
// console.log(feast("brown bear", "bear claw"), false);

function solution(str, ending) {
  // TODO: complete
  let first = str
    .split("")
    .splice(str.length - 2, str.length)
    .join("");
  console.log(first);
  if (first === ending) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("ninja", "ja"), true);
console.log(solution("samurai", "ai"), false);

function getMiddle(s) {
  //Code goes here!
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let gas = mpg * fuelLeft;
  if (gas === distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(100, 25, 2));
console.log(zeroFuel(50, 50, 1));

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
    console.log(numbers[i]);
  }
  return sum;
}

console.log(squareSum([5, 6]));

function filter_list(l) {
  l.filter((n) => typeof n === "Number");
}

console.log(filter_list([1, 2, 4, "hh", "df", 25]));
