````markdown
# React & JSX Basics

## ⚛️ What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used with React to describe UI elements in a syntax that looks similar to HTML.

```jsx
const element = <h1>Hello, World!</h1>;
````

### Features:

* Allows writing HTML-like code directly in JavaScript.
* JSX expressions get compiled to `React.createElement()` calls.
* Makes the UI code more readable and expressive.

> JSX is not HTML — it gets transpiled by tools like Babel before running in the browser.

---

## 📜 What is ECMAScript?

**ECMAScript (ES)** is the standard specification that JavaScript is based on. It defines the rules, syntax, and features that JavaScript must follow.

### Key Points:

* Developed by **ECMA International**.
* ES6 (ECMAScript 2015) introduced major features like `let`, `const`, arrow functions, classes, promises, modules, etc.
* React heavily uses ES6+ syntax for cleaner and more expressive code.

---

## 🛠️ React.createElement()

This is the core function used internally by React to create virtual DOM elements.

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, World!'
);
```

### Syntax:

```js
React.createElement(type, props, ...children)
```

### Equivalent JSX:

```jsx
const element = <h1 className="greeting">Hello, World!</h1>;
```

JSX is just syntactic sugar for `React.createElement()`.

---

## 🌿 Creating React Nodes with JSX

React nodes (aka elements) are created by writing HTML-like tags inside JavaScript.

```jsx
const heading = <h1>Welcome to React</h1>;
const list = (
  <ul>
    <li>JSX</li>
    <li>Components</li>
  </ul>
);
```

* Must be wrapped in one parent tag.
* Can return elements from functions or variables.

```jsx
function App() {
  return <div>My App</div>;
}
```

---

## 🖼️ Rendering JSX to the DOM

Use `ReactDOM.render()` (React v17 and earlier) or `createRoot().render()` (React v18+) to render JSX to the actual DOM.

### React 18+:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### React 17 and below:

```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

---

## 🧠 Using JavaScript Expressions in JSX

You can embed any JavaScript **expression** inside JSX using curly braces `{}`.

```jsx
const name = 'Tarun';
const element = <h1>Hello, {name}</h1>;
```

* Valid expressions: variables, function calls, arithmetic, ternary operators.
* **Statements** like `if`, `for`, etc., cannot be used directly.

```jsx
const isLoggedIn = true;
const message = <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>;
```

---

## 🎨 Inline CSS in JSX

In JSX, inline styles are passed as an **object** using the `style` attribute.

```jsx
const styleObj = {
  color: 'blue',
  backgroundColor: 'lightgray',
  padding: '10px'
};

const element = <h1 style={styleObj}>Styled Heading</h1>;
```

### Notes:

* CSS properties use **camelCase** (`backgroundColor`, not `background-color`).
* Values should be strings or expressions.

```jsx
<h1 style={{ fontSize: '24px', marginTop: '10px' }}>Inline Styled Text</h1>
```

---

> 💡 JSX compiles to efficient JavaScript and makes component-based UI building intuitive in React.

---