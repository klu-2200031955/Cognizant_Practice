
````markdown
# 📋 React Events and Handlers

---

## ⚡ React Events

React events are the way React handles user interactions like clicks, typing, form submissions, etc.

They are similar to DOM events but follow the **React-specific syntax and behavior**.

```jsx
<button onClick={handleClick}>Click Me</button>
````

> Unlike vanilla HTML, events in React are written in camelCase and use **JSX** syntax instead of strings.

---

## 🧰 Event Handlers

**Event handlers** are functions that get executed when a specific event occurs (e.g., a user clicks a button).

### Example:

```jsx
function handleClick() {
  alert('Button clicked!');
}

function App() {
  return <button onClick={handleClick}>Click Me</button>;
}
```

* You **don’t call the function** (no `()`); just pass the reference.
* If you want to pass arguments, use an arrow function:

```jsx
<button onClick={() => handleClick('Hello')}>Click</button>
```

---

## 🧪 Synthetic Events

React wraps native browser events in a **SyntheticEvent** — a cross-browser wrapper around the browser’s native event.

### Why?

* Ensures **consistent behavior** across all browsers.
* Improves **performance** with event pooling (though this is deprecated in React 17+).

### Example:

```jsx
function handleChange(event) {
  console.log(event.target.value); // SyntheticEvent
}
<input type="text" onChange={handleChange} />
```

> `event` here is not the raw browser event, but a **SyntheticEvent**.

---

## 🧾 React Event Naming Convention

React follows these key naming rules for events:

| Feature    | React                               | HTML                        |
| ---------- | ----------------------------------- | --------------------------- |
| Case Style | camelCase (e.g., `onClick`)         | lowercase (e.g., `onclick`) |
| Value Type | JS function `{}`                    | String `"handleClick()"`    |
| Binding    | Must manually bind `this` if needed | Not required                |

### Example Comparison:

**HTML**

```html
<button onclick="doSomething()">Click</button>
```

**React**

```jsx
<button onClick={doSomething}>Click</button>
```

---

> 🧠 React uses SyntheticEvent to abstract away browser differences and maintain a unified system for all event handling.

---

## 📚 Additional Events in React

React supports most common browser events, such as:

* `onClick`
* `onChange`
* `onSubmit`
* `onKeyDown`
* `onMouseEnter`
* `onFocus`, `onBlur`
* `onInput`, etc.