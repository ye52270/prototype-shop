import React, { useEffect, useState } from 'react';

export default function FunctionComponentType2() {
  const [state, setState] = useState({ count: 0 });
  useEffect(() => {
    console.log('componentDidMount', state.count);
  });

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
