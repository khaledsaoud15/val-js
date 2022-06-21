// declare a variable called company = "Facebbok" chack if the variable contains the letter F if it does log the answer else return false

let compnay = "Gacebook";
function company() {
  if (compnay.includes("F")) {
    console.log("company contains F");
  } else {
    console.log("it Doesnt contain F");
  }
}

company();

// declare a variable and assign its value to "Hello mister " and concat it with name in a called concatingName(name)

let user = "Hello Mister ";
function conctaingName(name) {
  return user.concat(name);
}

console.log(conctaingName("Akrem"));
console.log(conctaingName("Aziz"));
console.log(conctaingName("Zaki"));

// - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

// function chackAge() {
//   let userPrompt = prompt("Enter your age :");
//   let userAge = 18 - userPrompt;
//   if (userPrompt >= 18) {
//     console.log("you are old enough to drive");
//   } else {
//     console.log("you have to wait :" + userAge + " To Drive");
//   }
// }
// chackAge();

// - Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

function MyAge() {
  let userPrompt = prompt("my age");
  let userage = prompt("ur age");

  if (userPrompt > userage) {
    console.log("im older than u");
  } else {
    console.log("ur older than me");
  }
}
MyAge();

// - Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not ?

function evenums(n) {
  let result = n % 2;
  if (n % 2 === 0) {
    console.log(result);
  } else {
    console.log("its not even");
  }
}
evenums(5);
evenums(10);
evenums(20);
evenums(11);

// - Write a code which can give grades to students according to theirs scores:
//90-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

function grades() {
  let score = prompt("Enter your score");
  if (score > 100) {
    alert("Please enter a number betwween 0-100");
  }
  if (score >= 0 && score <= 49) {
    console.log("Your grade is F");
  } else if (score >= 50 && score <= 59) {
    console.log("Your grade is D");
  } else if (score >= 60 && score <= 69) {
    console.log("Your grade is C");
  } else if (score >= 70 && score <= 89) {
    console.log("your grade is B");
  } else if (score >= 90 && score <= 100) {
    console.log("your grade is A");
  }
}

grades();

// - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

function month() {
  let Month = prompt("Enter the month");
  if (Month === "september" || Month === "october" || Month === "november") {
    console.log("the season is Autumn");
  } else if (
    Month === "december" ||
    Month === "january" ||
    Month === "february"
  ) {
    console.log("the season is Winter");
  } else if (Month === "march" || Month === "april" || Month === "may") {
    console.log("the season is Spring");
  } else if (Month === "june" || Month === "july" || Month === "august") {
    console.log("the season is Summer");
  } else {
    console.log("try again");
  }
}

month();
