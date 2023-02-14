import React, { useState } from 'react';

export default function FunctionComponent() {
  const [count, setCount] = useState(0);

  function click() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      You Clicked : {count} times
      <button onClick={click}>Click Me</button>
    </div>
  );
}
