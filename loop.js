// Loops
// const name = "khaaaaaled";
// let count = 0;
// for (let i = 0; i < name.length; i++) {
//   if (name[i] === "a") {
//     console.log(count++, name[i]);
//   } else {
//     console.log(name[i]);
//   }
// }

// // iterate from 0 to 10
// for (let i = 0; i <= 10; i++) {
//   // multiply i * i
//   console.log(i * i);
// }

// iterate from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   // chack if i is an even number
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// iterate from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   // check if i is an odd number
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
let sum2 = 0;
let sum3 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  } else {
    sum3 += i;
  }
}
console.log(sum2, sum3);
