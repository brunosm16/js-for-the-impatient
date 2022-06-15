"use strict";

const user = { name: "Bruno Silveira", productsIds: [1, 2] };

// Returns user
const userFreezed = Object.freeze(user);

console.log(userFreezed);

// Expects to throw error
try {
  userFreezed.name = "Changed User Name";
} catch (error) {
  console.log(`An error ocurred : ${error}`);
}

try {
  userFreezed.productsIds[0] = 5555;
} catch (error) {
  console.log(`An error ocurred : ${error}`);
}

console.log(userFreezed);
