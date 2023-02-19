import { useEffect, useState, useRef } from 'react';
const BUTTON_TEXT = {
  NORMAL: '버튼이 눌리지 않았습니다',
  CLICKED: '버튼이 방금 눌렸습니다',
};

export default function Button() {
  const [message, setMessage] = useState(BUTTON_TEXT.NORMAL);
  const timer = useRef();

  //componentWillUnmount 에 timer 가 사랑 있으면 clear 해준다
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function click() {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMAL);
    }, 5000);
  }
  return (
    <div>
      <p>{message}</p>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        button
      </button>
    </div>
  );
}
