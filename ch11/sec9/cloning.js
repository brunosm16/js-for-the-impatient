const user = {
  name: "Bruno Silveira",
  age: "Drake",
  productsId: { prod1: "48587", track2: "8457685" },
};

const clonedAlbum = { ...user };

const shallowClone = Object.create(
  Object.getPrototypeOf(user),
  Object.assign(Object.getOwnPropertyDescriptors(user))
);

// Clone is still shallow
console.log(shallowClone);

// Reflects on shallowClone
user.productsId.prod1 = "changed id";

console.log(shallowClone);
console.log("\n-----\n");

console.log("\n Cloning object - Solution 1\n");
{
  const clone = (obj) => {
    const invalidObj = typeof obj !== "object" || Object.isFrozen(obj);

    if (invalidObj) {
      return obj;
    }

    const prototype = Object.getPrototypeOf(obj);
    const properties = Object.getOwnPropertyDescriptors(obj);
    const clonedObj = Object.create(prototype, properties);

    for (const prop in properties) {
      clonedObj[prop] = clone(obj[prop]);
    }

    return clonedObj;
  };

  const obj = { name: "Bruno", id: "468748" };

  const cloned = clone(obj);

  // Change on obj doesn't affect cloned obj
  obj.name = "clooone";
  cloned.name = "changed name - Bruno";

  console.log(obj);
  console.log(cloned);
}
