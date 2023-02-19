import { useState } from 'react';

export default function AddUserComponent({ onAddTask }) {
  const [state, setState] = useState({
    name: '',
    age: '',
  });

  const handlerNameChange = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handlerAgeChange = (e) => {
    setState({ ...state, age: e.target.value });
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    onAddTask(state.name, Number(state.age));
    setState({ name: '', age: '' });
  };

  console.log('---rendering---');

  return (
    <>
      <form onSubmit={handlerFormSubmit}>
        <div>
          이름 :
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={handlerNameChange}
            placeholder="이름을 입력하세요"
          ></input>
        </div>
        <div>
          나이 :
          <input
            name="age"
            type="text"
            value={state.age}
            onChange={handlerAgeChange}
            placeholder="나이를 입력하세요"
          ></input>
        </div>
        <div>
          <button>사용자 등록</button>
        </div>
      </form>
    </>
  );
}
