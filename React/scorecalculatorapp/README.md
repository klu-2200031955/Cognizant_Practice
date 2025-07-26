## • Explain React Components

React components are independent, reusable pieces of code that return React elements to be rendered to the DOM. They are the building blocks of a React application and allow developers to divide the UI into smaller, manageable parts. Components can manage their own state and receive inputs through props.

---

## • Identify the Differences Between Components and JavaScript Functions

| Feature                 | React Components                      | JavaScript Functions                     |
|------------------------|----------------------------------------|------------------------------------------|
| Purpose                | Build reusable UI blocks               | Perform specific tasks or calculations   |
| Return Value           | JSX (React elements)                   | Any data type                            |
| State Management       | Can manage internal state              | No built-in state management             |
| Lifecycle              | Have lifecycle methods or hooks        | No lifecycle support                     |
| Naming Convention      | PascalCase (e.g., `MyComponent`)       | camelCase or any valid function name     |

---

## • Identify the Types of Components

There are two main types of React components:

1. **Class Components** – ES6 classes that extend `React.Component`.
2. **Function Components** – JavaScript functions (with or without hooks) that return JSX.

---

## • Explain Class Component

Class components are ES6 classes that extend from `React.Component`. They include a `render()` method to return JSX and can manage internal state and lifecycle methods.

### Example:
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
````

---

## • Explain Function Component

Function components are simple JavaScript functions that accept props and return JSX. With React Hooks, they can also manage state and side effects, making them as powerful as class components.

### Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using arrow function syntax
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

---

## • Define Component Constructor

In class components, the `constructor()` method is used to:

1. Initialize the component’s state.
2. Bind event handler methods.
3. Perform any setup before rendering.

### Example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
}
```

---

## • Define render() Function

The `render()` method is required in class components. It returns the JSX to be rendered in the DOM and should be pure (not cause side effects or modify state).

### Example:

```jsx
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Current count: {this.state.count}</p>
      </div>
    );
  }
}
```