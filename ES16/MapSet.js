const sayings = new Map();
  sayings.set("dog", "woof");
  sayings.set("cat", "meow");
  sayings.set("elephant", "toot");
  console.log(sayings.size); // 3
  console.log(sayings.get("fox")); // undefined
  console.log(sayings.has("bird")); // false
  console.log(sayings.delete("dog"));

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"



// Set은 중복된 값을 허용하지 않는다. 따라서 특정 값은 Set내에서 하나만 존재 하게 된다.
  const mySet = new Set();
  mySet.add(1);
  mySet.add("some text");
  mySet.add("foo");

  console.log(mySet.has(1)); // true
  mySet.delete("foo");
  console.log(mySet.size); // 2

for (let item of mySet)
  console.log(item);
// 1
// "some text"
