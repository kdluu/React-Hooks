import React from 'react';
import './App.css';
import Counter from './Counter';
import { useIntersect } from './custom-hooks'

const App = () => {
  const [ref, entry] = useIntersect({});
  console.log(entry);
  return (
    <div>
      <div className="counter-container">
        <h1 >React Hook Dojo</h1>
        <Counter />
      </div>

      <div className="out-of-view">
        <h2 ref={ref}>Hello World</h2>
      </div>
    </div>
  );
};

export default App;
