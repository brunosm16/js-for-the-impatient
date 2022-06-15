"use strict";

const user = { name: "Bruno Silveira", id: "15456+48", age: undefined };

const hasAge = 'age' in user;
const hasName = user.hasOwnProperty('name');

console.log(hasAge);
console.log(hasName)