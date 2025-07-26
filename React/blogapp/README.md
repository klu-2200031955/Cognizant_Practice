## • Explain the Need and Benefits of Component Lifecycle

The **component lifecycle** in React defines the sequence of methods invoked in different phases of a component's existence—from creation to update and finally unmounting. It enables developers to:

- Perform setup tasks like fetching data or initializing subscriptions
- Optimize performance by preventing unnecessary re-renders
- Clean up resources to avoid memory leaks
- Control the UI and logic during various phases of the component

### Benefits:
- Better control over rendering and re-rendering
- Easier integration with external APIs or libraries
- Clear separation of concerns (setup, update, teardown)
- Efficient resource management through cleanup logic

---

## • Identify Various Lifecycle Hook Methods

React lifecycle methods (for class components) are divided into **three main phases**:

### 1. Mounting (Component is being inserted into the DOM)
- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### 2. Updating (Component is being re-rendered due to state/props changes)
- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

### 3. Unmounting (Component is removed from the DOM)
- `componentWillUnmount()`

---

## • List the Sequence of Steps in Rendering a Component

### 1. **Mounting Phase** (Initial Render)
1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

### 2. **Updating Phase** (Re-render due to state/props changes)
1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

### 3. **Unmounting Phase**
1. `componentWillUnmount()`

---

**Note**: In **Function Components**, similar lifecycle control is handled using **React Hooks**:
- `useEffect()` replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

