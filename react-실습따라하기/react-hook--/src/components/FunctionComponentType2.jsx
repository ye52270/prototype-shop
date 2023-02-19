import React, { useState } from 'react';

export default function FunctionComponentType2() {
  const [state, setState] = useState({ count: 0 });

  function click() {
    setState({ count: state.count + 1 });
  }
  return (
    <div>
      You Clicked : {state.count} times
      <button onClick={click}>Click Me</button>
    </div>
  );
}
