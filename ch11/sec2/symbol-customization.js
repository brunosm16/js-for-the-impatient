"use strict";

console.log("ToString customization\n");
{
  const user = { name: "Bruno", age: 24 };

  // Returns [object Object]
  console.log(user.toString());

  // Using Symbol to customize behavior
  user[Symbol.toStringTag] = "is a user";

  console.log(user.toString());
}
console.log("\n----------\n");

console.log("InstaceOf customization\n");
{
  class Iterable {
    // hasInstace customize instaceOf behavior
    static [Symbol.hasInstance](obj) {
      // Checks if obj has iterator method
      return Symbol.iterator in obj;
    }
  }
  const arr = [1, 2, 3] instanceof Iterable;
  console.log(arr);
}
console.log("\n----------\n");

console.log("\n");
{
}
console.log("\n----------\n");
