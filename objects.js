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
console.log(cars.greetingUser());

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

const id = Number(prompt("Enter Your ID"));
const name = prompt("Enter Your NAME");
const email = prompt("Enter Your EMAIL");
const Age = prompt("Enter Your AGE");
const country = prompt("Enter Your COUNTRY");
const street = prompt("Enter Your STREET");

const newUser = {
  id: id,
  name: name,
  age: Age,
  email: email,
  address: {
    country: country,
    street: street,
  },
};
console.log(addUSer(users, newUser));
console.log(users);

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
