import { v4 as uuid } from "uuid";

export let users = [];
// uuid();

export const createUser = (req, res) => {
  console.log("POST route");

  const user = req.body;

  const userWithId = { id: uuid(), ...user };

  users.push(userWithId);

  console.log(users);
  res.send(`User ${userWithId.firstname} added to users`);
};

export const getUserId = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  console.log(foundUser);
  res.send("GET ID route");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} deleted`);
};

export const patchUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const userToUpdate = users.find((user) => user.id === id);

  if (firstname) {
    userToUpdate.firstname = firstname;
  }

  if (lastname) {
    userToUpdate.lastname = lastname;
  }

  if (age) {
    userToUpdate.age = age;
  }

  res.send(`User with id ${id} updated: ${users}`);
};
