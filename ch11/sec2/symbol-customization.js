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

console.log("InstanceOf customization\n");
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

console.log("Customizing concat\n");
{
  const arr1 = [1, 2, 3, 4, 5];
  arr1[Symbol.isConcatSpreadable] = false;
  const arr2 = [6, 7, 8, 9, 10];
  const concatArr = [].concat(arr1, arr2);
  console.log(concatArr);
}
console.log("\n----------\n");

// console.log("\n");
// {
// }
// console.log("\n----------\n");
