const users = [
  {
    id: 1,
    name: "Mohammed",
    age: 30,
    email: "mohammed@gmail.com",
    address: {
      country: "Algeria",
      street: "123 Main street",
    },
  },
  {
    id: 2,
    name: "Aicha",
    age: 2,
    email: "Aicha@gmail.com",
    address: {
      country: "Algeria",
      street: "123 Main street",
    },
  },
  {
    id: 3,
    name: "Zoubir",
    age: 33,
    email: "Zoubir@gmail.com",
    address: {
      country: "ZoubirLand",
      street: "Zoubir123 Main street",
    },
  },
];
const cars = {
  name: "Toyota",
  plate: 00,
  greetingUser: function () {
    return "hello";
  },
};
// console.log(cars.greetingUser());

function addUSer(users, user) {
  const findUser = users.find((u) => u.id === user.id);
  if (findUser) {
    return { message: "user Already exist " };
  }
  const newUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
    address: {
      country: user.address.country,
      street: user.address.street,
    },
  };
  users.push(newUser);
  return {
    message: "user added succefully",
  };
}

// const id = Number(prompt("Enter Your ID"));
// const name = prompt("Enter Your NAME");
// const email = prompt("Enter Your EMAIL");
// const Age = prompt("Enter Your AGE");
// const country = prompt("Enter Your COUNTRY");
// const street = prompt("Enter Your STREET");

// const newUser = {
//   id: id,
//   name: name,
//   age: Age,
//   email: email,
//   address: {
//     country: country,
//     street: street,
//   },
// };
// console.log(addUSer(users, newUser));
// console.log(users);

const gimli = {
  namee: "Gimli",
  race: "dwarf",
  weapon: "axe",
  age: 50,
  greet: function () {
    return `Hi, my Race is ${this.race}!`;
  },
};

gimli["age"] = 52;

delete gimli["age"];
delete gimli["race"];

console.log(gimli);

const dog = {
  name: "spike",
  age: 7,
  color: "grey",
  legs: 4,
  bark: () => {
    return "woof woof";
  },
};

console.log(dog);

const dog1 = {
  ...dog,
  breed: "bullDog",
  getDogInfo: () => {
    return `this dog has a name of ${dog.name}`;
  },
};
console.log(dog1);

const users1 = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function findMax(users1) {
  let max = 0;
  let username = "";
  let userInfo = "";
  for (let user in users1) {
    if (users1[user].skills.length > max) {
      max = users1[user].skills.length;
      username = user;
      userInfo = users1[user];
    }
  }
  return { skills: max, username: username, userInfo: userInfo };
}
console.log(findMax(users1));

function isLogedIn(users1) {
  let count = 0;
  for (let user in users1) {
    if (users1[user].isLoggedIn == true) {
      count++;
    }
  }
  return count;
}

console.log(isLogedIn(users1));

function findMERN(users) {
  let mernUsers = {};
  let count = 0;
  for (let user in users) {
    if (
      users[user].skills.includes("MongoDB") &&
      users[user].skills.includes("Express") &&
      users[user].skills.includes("React") &&
      users[user].skills.includes("Node")
    ) {
      mernUsers[user] = users[user];
      count++;
    }
  }
  return { mernUsers, count };
}
console.log(findMERN(users1));

function addUser(users, newUser, name) {
  users[name] = newUser;
  if (users[name] == newUser) {
    return { message: "User already exists" };
  }
  return users;
}

console.log(
  addUser(
    users1,
    {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    "Paul"
  )
);
console.log(
  addUser(
    users1,
    {
      email: "ZoubirLaClassLakamora@gmail.com",
      skills: [],
      age: 33,
      isLoggedIn: false,
      points: 0,
    },
    "Zoubir"
  )
);

console.log(users1);
console.log(Object.keys(users1));

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: 500,
  expensses: 1500,
  totalIncome: () => {
    return `the totall income is ${personAccount.incomes}`;
  },
  totalExpenss: () => {
    return `the totall expensses is ${personAccount.expensses}`;
  },
  accountInfo: () => {
    return personAccount.firstName + " " + personAccount.lastName;
  },
  addIncome: () => {
    return `this person has an income of ${personAccount.incomes}`;
  },
  addExpensess: () => {
    return `this person has a expess of ${personAccount.expensses}`;
  },
  accountBalance: () => {
    return personAccount.incomes - personAccount.expensses;
  },
};

console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenss());

const usersArray = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function login(usersArray, id) {
  const findUser = usersArray.find((user) => user._id === id);
  if (findUser) {
    return { message: "you are successfully loged in" };
  } else {
    return { message: "Please login" };
  }
}

console.log(login(usersArray, "ghderc"));
console.log(login(usersArray, "4d54f7"));

function signin(usersArray, user) {
  const findUser = usersArray.find((u) => u._id === user._id);
  if (findUser) {
    return { message: "you already have an account" };
  }
  const newUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
    password: user.password,
    createdAt: user.createdAt,
    isLoggedIn: true,
  };
  return {
    message: "user added successfully",
    users: usersArray.push(newUser),
  };
}

const newuserAdded = {
  _id: "4d54f7",
  username: "khaled",
  email: "khaled@gmail.com",
  password: "12345",
  createdAt: new Date(),
};
const newuserAdded2 = {
  _id: "4d54f7",
  username: "khaled",
  email: "khaled@gmail.com",
  password: "12345",
  createdAt: new Date(),
};
const newuserAdded3 = {
  _id: "12ede",
  username: "Chaima",
  email: "chaimachaima@gmail.com",
  password: "x2c1d47d84",
  createdAt: new Date(),
};

console.log(signin(usersArray, newuserAdded));
console.log(signin(usersArray, newuserAdded2));
console.log(signin(usersArray, newuserAdded3));
console.log(usersArray);

console.log(login(usersArray, "12ede"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
