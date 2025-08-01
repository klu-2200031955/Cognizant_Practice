import React, { Component } from 'react';

class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
  }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello();
  }

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello() {
    this.setState({ message: 'Hello! Count has been updated.' });
  }

  handleWelcome(msg) {
    this.setState({ message: `Welcome Message: ${msg}` });
  }

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic event
    this.setState({ message: 'I was clicked' });
  };

  render() {
    return (
      <div>
        <h2>React Event Handling</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.handleWelcome('Welcome to React!')}>Say Welcome</button>
        <br /><br />

        <button onClick={this.handleSyntheticEvent}>Click Me (Synthetic Event)</button>
        <br /><br />

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventHandlers;
