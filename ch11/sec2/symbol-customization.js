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

console.log("Implemeting toString on Object \n");
{
  class User {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }

    get [Symbol.toStringTag]() {
      return this.name + " " + this.lastName;
    }
  }

  const bruno = new User("Bruno", "Silveira");
  console.log(bruno.toString());
}
console.log("\n----------\n");

console.log("Controlling Type Conversion\n");
{
  class Percent {
    constructor(rate) {
      this.rate = rate;
    }

    toString() {
      return `${this.rate}%`;
    }

    valueOf() {
      return this.rate * 0.01;
    }

    [Symbol.toPrimitive](hint) {
      // Hint will be default since is using "+" operator
      if (hint === "number") this.valueOf();

      return this.toString();
    }
  }

  const percentOne = new Percent(33.3);

  console.log("Result : " + percentOne);
}
console.log("\n----------\n");

console.log("Yielding a Array of Type Array\n");
{
  class ExampleArray extends Array {}

  const myArrayValues = new ExampleArray(1, 2, 3, 4, 5);
  const resultArray = myArrayValues.map((value) => value * 2);

  // Expecting to be a type of ExampleArray
  console.log(resultArray);

  class Range extends Array {
    constructor(start, end) {
      super();

      for (let i = 0; i < end - start; i++) {
        this[i] = start + i;
      }
    }

    static get [Symbol.species]() {
      return Array;
    }
  }

  const mySampleRange = new Range(1, 5);
  const rangeArr = mySampleRange.map((value) => value);
  console.log(rangeArr);
}
console.log("\n----------\n");

// console.log("\n");
// {
// }
// console.log("\n----------\n");
