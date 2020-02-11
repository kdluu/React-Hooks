import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  // Every time it render, instead of take the intitial count to 0, we going to look into the localStorage to see if there any 'count' value, otherwise we set it to 0
  // This purpose of making the initialCount is a function is it only call once when we render the page the first time, prevent it call multiple time when we try to access the intialCount.
  const initialCount = () => Number(window.localStorage.getItem('count') || 0)
  const [count, setCount] = useState(initialCount); // <---intialCount
  // This useEffect callback after every single time our component rerender.
  // However, we only want useEffect to be call when the count value changes specificly
  // useEffect hooks allow us to passing an array as a second args, React will only run when the count value changes.
  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])
  const subtract = () => {
    setCount(count - 1)

  }
  const add = () => {
    setCount(count + 1)
  }
  return (
    <div className="counter">
      <h2>{count}</h2>

      <div className="counter-buttons">
        <button
          className="counter-button"
          data-test="subtract-button"
          // onClick={() => setCount(count - 1)}
          onClick={subtract}
        >
          Sub
          </button>

        <button
          className="counter-button"
          data-test="add-button"
          // onClick={() => setCount(count + 1)}
          onClick={add}
        >
          Add
          </button>
      </div>
    </div>
  );

}


export default Counter;
