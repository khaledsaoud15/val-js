console.log("Hello World"); //to to log something in the console
// alert("Alert")to Alert a user of something
// prompt("Please enter your Name");  to input something in the prompt

// DATA TYPES
// Primitive Data Type
console.log("This is a String Data Type"); // Everything between the " " is a String
console.log(10); // this is Number Data type
console.log(false); // this is Boolean Data type
console.log(undefined); // this is undefined Data type
console.log(null); // this is null Data type
console.log(NaN); // this is NaN Data type (Not A NUMBER)
// non-primitive data type
console.log([1, 2, 3, 4]); // This is an Array data type
console.log({
  name: "Khaled",
  email: "KhaledSaoud@gmail.com",
}); //this is an Object Data type
function Name(name) {
  console.log(name);
}
Name("Khaled"); //this is  Function Data type

// Arethmetic operatore

console.log(10 + 5); // the plus Operator
console.log(10 - 5); //the Minus Operator
console.log(10 / 5); // the Divide operator
console.log(10 * 5); // the Multiply operator
console.log(10 % 8); // the Modulu operator
console.log(10 ** 2); // the power operator

// ASSIGNEMENT OPERATORS
var a = 10;
a += 1; // += == a = a + 1
a -= 1; // a = a - 1
a *= 2; // a = a * 2
a /= 4; // a = a / 4
a %= 2; // a = a % 2

console.log(a);

// Comparising OPERATORS
var b = 5;
var c = 5;
console.log(b <= c);
console.log(b > c);

// String operator

var company = "Google";

company += ".com";
console.log(company);

// Functions
function ageCount(years, curr) {
  // function ageCount (parameter1,parameter2 ...) {   function Body (the block of code)     }
  console.log(curr - years);
}

ageCount(2004, 2022);

function triangleSurface(base, height) {
  var math = (base * height) / 2;
  return math;
}

console.log(triangleSurface(10, 20));

function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// If Statement

function compareNumbers(a, b) {
  if (a < b) {
    return true;
  } else if (a > b) {
    return true;
  } else {
    return "Not found";
  }
}

console.log(compareNumbers(100, 100));
