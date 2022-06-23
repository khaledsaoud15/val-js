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
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// let sum2 = 0;
// let sum3 = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum2 += i;
//   } else {
//     sum3 += i;
//   }
// }
// console.log(sum2, sum3);

// const fruits = ["Banana", "Apple", "Water Melon", "Orange"];
// for (fruit in fruits) {
//   if (fruit.length) {
//     console.log(fruit);
//   }
// }
// for (fruit of fruits) {
//   if (fruit.length) {
//     console.log(fruit);
//   }
// }

// const user = "Khaled saoud";
// let i = 0;
// while (i < user.length) {
//   console.log(user[i]);
//   i++;
// }

// let j = 0;
// do {
//   console.log(user[j]);
//   j++;
// } while (j < user.length);

// const users = ["Ahmed", "Malek", "John"];

// for (let i = 0; i < users.length; i++) {
//   console.log("hello");
//   for (let j = 0; j < users.length; j++) {
//     console.log("hi");
//   }
// }

// Function numPower() to returns power of number for provided
// exponential value using for loop.

// function numPower(num, pow) {
//   let res = 1; //return 1 for pow=0
//   for (let i = 0; i < pow; i++) {
//     res *= num;
//   }
//   return res;
// }
// console.log(numPower(3, 3)); //64
// console.log(numPower(16, 2)); //256

// Function printPattern() is used to
// print a pattern for a given range using nested for loop.

function findPattern(range) {
  for (i = 0; i <= range; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}

findPattern(3);

// Function digitSum() to returns sum of all digits in a given number using while loop. Learn more about JavaScript built-in Math methods from

function digitSum(num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(digitSum(5896)); //20
console.log(digitSum(56349)); //27
