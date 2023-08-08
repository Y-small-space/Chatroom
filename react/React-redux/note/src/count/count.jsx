import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

export default function Count() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setCount(selectedValue);
  };

  const increment = () => {
    const selectedValue = parseInt(selectNumberRef.current.value, 10);
    setCount((prevCount) => prevCount + selectedValue);
  };

  const decrement = () => {
    const selectedValue = parseInt(selectNumberRef.current.value, 10);
    setCount((prevCount) => prevCount - selectedValue);
  };

  const incrementIfOdd = () => {
    const selectedValue = parseInt(selectNumberRef.current.value, 10);
    if (count % 2 !== 0) {
      setCount((prevCount) => prevCount + selectedValue);
    }
  };

  const incrementAsync = () => {
    const selectedValue = parseInt(selectNumberRef.current.value, 10);
    setTimeout(() => {
      setCount((prevCount) => prevCount + selectedValue);
    }, 3000);
  };

  const selectNumberRef = React.useRef(null);

  return (
    <div>
      <h1>当前求和为{count}</h1>
      <select ref={selectNumberRef} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>+ji</button>
      <button onClick={incrementAsync}>+async</button>
    </div>
  );
}
