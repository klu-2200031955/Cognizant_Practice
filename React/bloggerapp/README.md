````markdown
# 🧩 React Rendering, Lists, Keys & `map()` Function

This section dives deeper into various ways to conditionally render, work with lists, assign keys, and use the `map()` function in React.

---

## 🔀 Various Ways of Conditional Rendering

React offers multiple techniques for rendering content conditionally based on state or props:

### 1. **Using `if-else` Statement**
```jsx
if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <LoginPage />;
}
````

### 2. **Using Ternary Operator**

```jsx
return isLoggedIn ? <Dashboard /> : <LoginPage />;
```

### 3. **Using Logical AND (`&&`)**

```jsx
{hasPermission && <AdminPanel />}
```

### 4. **Switch Case Inside a Function**

```jsx
function renderComponent(status) {
  switch (status) {
    case 'loading': return <Loading />;
    case 'success': return <Data />;
    default: return <Error />;
  }
}
```

---

## 📚 How to Render Multiple Components

You can render multiple components inside a parent component using:

### 1. **Wrapping in a Parent Element**

```jsx
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

### 2. **Using React Fragment**

```jsx
function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
```

* `<>...</>` is shorthand for `<React.Fragment>` and avoids extra nodes in the DOM.

---

## 📦 What is a List Component?

A **list component** renders multiple elements dynamically from an array of data.

### Example:

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
```

> Useful for rendering dynamic content like users, tasks, products, etc.

---

## 🏷️ Keys in React Applications

**Keys** help React identify which elements have changed, are added, or are removed. They are crucial for performance and correctness.

```jsx
const items = ['A', 'B', 'C'];
items.map((item, index) => <li key={index}>{item}</li>);
```

### Key Rules:

* Keys should be **unique** among siblings.
* Avoid using `index` as a key unless items are static.
* Better to use unique IDs when available.

---

## 🧱 Extracting Components with Keys

When rendering a list, you can **extract each list item into its own component**, and still pass the `key` prop properly.

### Example:

```jsx
function ListItem({ item }) {
  return <li>{item.name}</li>;
}

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <ListItem key={item.id} item={item} />)}
    </ul>
  );
}
```

> Key must be added to the outermost element returned by the **mapped component**, not inside it.

---

## 🔁 React `map()` Function

React uses JavaScript’s native `.map()` function to render lists.

```jsx
const numbers = [1, 2, 3];
const listItems = numbers.map(num => <li key={num}>{num}</li>);
```

* `map()` transforms each array element into a React element.
* Commonly used for rendering lists from API data or state arrays.

### Example with components:

```jsx
const products = [
  { id: 1, name: 'Pen' },
  { id: 2, name: 'Notebook' }
];

function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

---