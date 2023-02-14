import { useEffect, useState, useRef, useReducer } from 'react';

export default function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(count, action) {
    if (action.type === 'tick') {
      return count + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => {
      return clearInterval(timeInterval);
    };
  }, [dispatch]);

  return (
    <div>
      {console.log(`render(${count})`)}
      <p> {count} </p>
    </div>
  );
}
