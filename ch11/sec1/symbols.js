"use strict";

// Create a symbol and console

const keyOne = Symbol("keyOne");
const keyTwo = Symbol("keyTwo");

console.log(keyOne);
console.log(keyTwo);
console.log(keyOne === keyTwo);
console.log("\n---------\n");

// 1. Create object with symbol passing a value as id and acess it
const obj = {
  [keyOne]: 1,
};

console.log(obj[keyOne]);

console.log("changing symbol value");

obj[keyOne] = "Changed key one";

console.log(obj[keyOne]);

// 2. Simulate a DOM Node with a variable as symbol

let node = { type: "Simulating DOM Node" };

// Not a good practice
node.label = "this is a label in node";

console.log(node);

// 3. Create a global symbol
let labelSymbol = Symbol("label");
node[labelSymbol] = 'this is a label in node using symbol'

// 4. Check typeof symbol
let symbolGlobal = Symbol.for('global symbol');
console.log(symbolGlobal);
