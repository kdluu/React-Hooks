import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  subtract = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button data-test="subtract-button" onClick={this.subtract}>
          Subtract
        </button>

        <h2>{this.state.count}</h2>

        <button data-test="add-button" onClick={this.add}>
          Add
        </button>
      </div>
    );
  }
}

export default Counter;
