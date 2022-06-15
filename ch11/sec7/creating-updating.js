"use strict";

console.log('\n Using propertyDescriptors with Object.create\n');

const propertyDescriptors = {
  name: {
    value: "Bruno Silveira",
    writable: true,
    enumerable: true,
    configurable: true,
  },

  id: {
    id: '4587489',
    writable: false,
    enumerable: true,
    configurable: false,
  },
};

const proto = {
  toString() {
    return `${this.name} - ${this.id}`;
  },
};

const userOne = Object.create(proto, propertyDescriptors);
console.log(userOne);
console.log(userOne.toString());

console.log('\n------------\n')