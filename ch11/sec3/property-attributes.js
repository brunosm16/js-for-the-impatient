"use strict";

const user = { name: "Bruno Silveira" };

Object.defineProperty(user, "age", {
  value: "24",
  // enumerable: true,
  writable: true,
  configurable: false,
});

// Throws Error
// user.age = 'changed name';

// Age was not set in property descriptor so it will not appear
console.log(user);

Object.defineProperty(user, "lastName", {
  get() {
    return `${this.name.split(" ")[1]}`;
  },

  set(lastName) {
    this.name = `${this.name.split(" ")[0]} ${lastName}`;
  },
});

// Use the getter defined
console.log(user);

user.lastName = "Moraes";

// Use the setter defined
console.log(user);

Object.defineProperties(user, {
  id: { value: "11", writable: false, enumerable: true, configurable: false },
});

console.log(user);

console.log(Object.getOwnPropertyDescriptor(user, "id"));
console.log(Object.getOwnPropertyDescriptor(user, "name"));
