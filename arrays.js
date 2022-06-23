const numbers = [1, 2, 3, 5, 6, 8, 9, 9, 3, 2];

numbers.push(7); // add element at the end of an array
numbers.unshift(0); // add element at the beginning of an array // remove element at the end of an array

console.log(numbers);
console.log("_______________________________________");
const removedNumber = numbers.pop(); // remove element at the end of an array
const removedNumber1 = numbers.shift(); // remove element at the beginning of an array
console.log(removedNumber);
console.log(removedNumber1);

console.log(numbers);

console.log(numbers.splice(1, 4)); // to splice element betwwen starting index and deleting count
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  count = count + numbers[i];
}

console.log(count);

const arr = [1, 2, 1, 4, 3, 3, 3, 3, 3, 3, 3, 3];
console.log(arr);
console.log(arr.indexOf(2));
function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      // check if the element at index[i] exist
      unique.push(arr[i]); // if not push it to the emty array else ignore it
    }
  }
  return unique;
}

console.log(removeDuplicates(arr));

const fruits = ["mango", "apple", "banana", "water melon", "orange", "lime"];
console.log(fruits);

fruits.filter((fruit) => {
  // return the element that passes a certain test
  if (fruit.length < 5) {
    console.log(fruit);
  }
});

const num = [1, 3, 2, 4, 5, 7, 9, 8, 6];
const letter = ["Khaled", "Ahmed", "Bachir", "Zoubir"];
console.log(num);
console.log(letter.sort()); //sort the letter by alphabet

num.sort((a, b) => {
  // to sort the numbers from the smallest to the biggest
  return a - b;
});

console.log(num);

fruits.find((fruit) => {
  // return the first element that passes the test
  if (fruit === "banana") {
    console.log({ fruit: fruit.split("").reverse().join("") }); // to reverse a string
  } else {
    console.log({ message: "Not Found" });
  }
});
