import { useState } from 'react';

const Counter = () => {
  console.log('i am rendering');
  const [ counter, setCounter ] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter;