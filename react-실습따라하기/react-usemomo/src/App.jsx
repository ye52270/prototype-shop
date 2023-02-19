import { useState, useRef, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { createTodos } from './utils.js';
import TodoList from './TodoList';
import MyTheme from './Theme';

const todos = createTodos();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [tab, setTab] = useState('all');
  const inputRef = useRef();
  const chkboxRef = useRef();

  const handlerCheckboxChange = (e) => {
    setIsDark(e.target.checked);
    if (!isDark) {
      inputRef.current.value = 'Dark Mode설정됐습니다';
    } else if (isDark) {
      inputRef.current.value = 'White Mode설정됐습니다';
    }
  };
  const handlerButtonAllClick = () => {
    setTab('all');
  };
  const handlerButtonActiveClick = () => {
    setTab('active');
  };
  const handlerButtonCompletedClick = () => {
    setTab('Completed');
  };

  console.log('checkbox ref 값 :', chkboxRef);
  return (
    <div className="App">
      <button onClick={handlerButtonAllClick}> All </button>
      <button onClick={handlerButtonActiveClick}> Active </button>
      <button onClick={handlerButtonCompletedClick}> Completed </button>
      <br />
      <label>
        Dark Mode:
        <input
          className="chkBox"
          type="checkbox"
          onChange={handlerCheckboxChange}
          checked={isDark}
          ref={chkboxRef}
        />
      </label>
      <MyTheme ref={inputRef}></MyTheme>
      <TodoList
        todos={todos}
        theme={isDark ? 'divTodoBlack' : 'divTodoWhite'}
      />
    </div>
  );
}

export default App;
