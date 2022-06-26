const people = [
  {
    id: 1,
    name: "khaled",
    age: 21,
    email: "khaledsaoud237@gmail.com",
    address: {
      country: "Algeria",
      street: "Hussein dey",
    },
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "Zoubir",
    age: 35,
    email: "zoubirLeshommes@gmail.com",
    address: {
      country: "Algeria",
      street: "Hadjout",
    },
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    name: "yanis",
    age: 15,
    email: "yanislachichi@gmail.com",
    address: {
      country: "france",
      street: "Paris",
    },
    createdAt: new Date().toLocaleString(),
  },
];
console.log(people);

for (let i = 0; i < people.length; i++) {
  if (people[i].age > 15) {
    console.log(people[i].name);
  }
}

function addPerson(people, user) {
  const existUser = people.find((p) => p.name === user.name);
  if (existUser) {
    return {
      message: "You already in",
    };
  }

  // if user doesn't exist, add new user
  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    name: user.name,
    email: user.email,
    address: {
      country: user.address.country,
      street: user.address.street,
    },
    createdAt: new Date().toLocaleString(),
  };
  people.push(newUser);
  return {
    message: "user has been succefully added",
  };
}

const user = {
  name: "ahmed",
  age: 20,
  email: "hahah@gmail.com",
  address: {
    country: "Algeria",
    street: "soug",
  },
};

addPerson(people, user);
