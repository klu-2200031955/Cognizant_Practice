````markdown
---

## ✅ Features of ES6 (ECMAScript 2015)

- **let and const**: Block-scoped variable declarations.
- **Arrow functions**: Shorter syntax for writing functions.
- **Classes**: Cleaner syntax for object-oriented programming.
- **Template literals**: String interpolation using backticks (`` ` ``).
- **Destructuring**: Extract values from arrays/objects into variables.
- **Default parameters**: Set default values for function parameters.
- **Rest and Spread operators**: Flexible ways to handle arrays and objects.
- **Modules**: Import and export code between files.
- **Promises**: Simplified handling of asynchronous operations.
- **for...of loop**: Iterate over iterable objects.
- **Map and Set objects**: New data structures.

---

## 🔹 JavaScript `let`

The `let` keyword is used to declare a block-scoped variable (introduced in ES6).

```js
let count = 5;
if (true) {
  let count = 10;
  console.log(count); // 10 (inner scope)
}
console.log(count); // 5 (outer scope)
````

* Variables declared with `let` are not hoisted to the top of the block.
* Can be reassigned but not redeclared in the same scope.

---

## 🔸 Difference Between `var` and `let`

| Feature       | `var`                           | `let`                           |
| ------------- | ------------------------------- | ------------------------------- |
| Scope         | Function-scoped                 | Block-scoped                    |
| Hoisting      | Yes, initialized as `undefined` | Yes, but not initialized        |
| Redeclaration | Allowed                         | Not allowed in the same scope   |
| Global Object | Becomes property of `window`    | Does not become global property |

---

## 🔹 JavaScript `const`

The `const` keyword is used to declare **block-scoped, read-only** named constants.

```js
const PI = 3.14159;
// PI = 3; ❌ Error: Assignment to constant variable
```

* Must be initialized at declaration.
* The variable itself cannot be reassigned.
* **Note**: Objects/arrays declared with `const` can still be mutated.

```js
const arr = [1, 2];
arr.push(3); // ✅ Allowed
```

---

## 🧱 ES6 Class Fundamentals

ES6 introduced a cleaner syntax for object-oriented programming using `class`.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const p = new Person("Tarun");
console.log(p.greet()); // Hello, Tarun
```

* `constructor` is a special method for initializing objects.
* Methods are defined without the `function` keyword.
* Behind the scenes, it still uses prototypes.

---

## 🧬 ES6 Class Inheritance

Inheritance allows one class to inherit properties and methods from another.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const d = new Dog("Rocky");
console.log(d.speak()); // Rocky barks.
```

* Use `extends` to inherit from another class.
* Use `super()` to call the parent class's constructor.

---

## 🎯 ES6 Arrow Functions

Arrow functions provide a concise syntax for writing functions.

```js
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

### Characteristics:

* Do not have their own `this`, `arguments`, or `super`.
* Cannot be used as constructors.
* Useful for callbacks and concise expressions.

```js
// Traditional
setTimeout(function() {
  console.log("Hello");
}, 1000);

// Arrow Function
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

---

## 📦 `Set` and `Map` in ES6

### `Set`

A collection of **unique values**.

```js
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate, ignored

console.log(set); // Set { 1, 2 }
```

### `Map`

A collection of **key-value pairs**, where keys can be any type.

```js
const map = new Map();
map.set("name", "Tarun");
map.set(1, "one");

console.log(map.get("name")); // Tarun
```

* Maintains insertion order.
* Keys can be of any type (unlike objects which convert keys to strings).

