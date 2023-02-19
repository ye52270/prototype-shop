import React, { useEffect, useState } from 'react';

export default function FunctionComponentType3() {
  const [state, setState] = useState({ count: 0 });
  useEffect(() => {
    setTimeout(() => {
      console.log(`you clicked ${state.count} times`);
    }, 3000);
  });

  function click() {
    //setState 의 dependency 를 외부의 state에 의존적이지 않다

    setState((state) => ({ count: state.count + 1 }));
  }
  return (
    <div>
      You Clicked : {state.count} times
      <button onClick={click}>Click Me</button>
    </div>
  );
}
