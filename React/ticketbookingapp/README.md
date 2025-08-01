````markdown
# 🔀 Conditional Rendering & Control in React

This section explains how to control what gets rendered in React using conditionals, element variables, and component logic.

---

## 🎭 Conditional Rendering in React

Conditional rendering means rendering **different UI elements** based on some conditions, like user input, API responses, or app state.

### ✅ Using `if` or `else`
```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}
````

### ✅ Using Ternary Operator

```jsx
const isLoggedIn = true;
return (
  <div>
    {isLoggedIn ? <p>Dashboard</p> : <p>Login</p>}
  </div>
);
```

### ✅ Using Logical AND (`&&`)

```jsx
const hasUnread = true;
return (
  <div>
    {hasUnread && <p>You have unread messages.</p>}
  </div>
);
```

> Use `&&` for simple one-sided conditions. Use ternary `? :` for two branches.

---

## 📦 Element Variables

Element variables allow you to store JSX in a variable and conditionally update what’s rendered.

```jsx
function Status({ isOnline }) {
  let statusMessage;

  if (isOnline) {
    statusMessage = <p>User is online</p>;
  } else {
    statusMessage = <p>User is offline</p>;
  }

  return <div>{statusMessage}</div>;
}
```

* Helps avoid nested `if` or ternary conditions inside JSX.
* Improves readability in complex render logic.

---

## 🚫 Preventing Component Rendering

You can **stop a component from rendering** by returning `null` inside it.

### Example:

```jsx
function WarningBanner({ showWarning }) {
  if (!showWarning) {
    return null; // Nothing is rendered
  }

  return <div className="warning">Warning!</div>;
}
```

### Use Cases:

* Conditionally render modals, tooltips, alerts, etc.
* Avoid unnecessary DOM updates for hidden UI elements.

> Returning `null` is valid in React and means “render nothing.”

---

## ✅ Summary

| Technique          | Use Case                                  |
| ------------------ | ----------------------------------------- |
| `if` / `else`      | Clear multi-branch logic                  |
| Ternary (`? :`)    | Short inline conditions                   |
| Logical AND (`&&`) | Render one element if condition is true   |
| Element variables  | Store and manipulate JSX before rendering |
| Returning `null`   | Skip rendering a component entirely       |

---

> 💡 Conditional rendering gives you complete control over what and when elements appear in your React app.
