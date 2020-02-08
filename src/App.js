import React from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <div className="counter-container">
        <h1>React Hook Dojo</h1>

        <Counter />
      </div>

      <div className="out-of-view">
        <h2>Hello World</h2>
      </div>
    </div>
  );
};

export default App;
