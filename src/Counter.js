import React from 'react';
import './Counter.css';

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
      <div className="counter">
        <h2>{this.state.count}</h2>

        <div className="counter-buttons">
          <button
            className="counter-button"
            data-test="subtract-button"
            onClick={this.subtract}
          >
            Sub
          </button>

          <button
            className="counter-button"
            data-test="add-button"
            onClick={this.add}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
