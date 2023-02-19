import { useReducer } from 'react';

let initialUsers = [
  { id: 0, name: '홍길동', age: 39 },
  { id: 1, name: '이순신', age: 28 },
  { id: 2, name: '베토벤', age: 42 },
];

function reducer(state, action) {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
        name: action.addName,
        age: action.addAge,
      };
    case 'inputAge':
      return {
        ...state,
        age: action.nextAge,
      };
  }
  throw Error('Unknown action' + action.type);
}

export default function UseReduceComponent() {
  const [state, dispatch] = useReducer(reducer, initialUsers);

  function handleSubmitAddUser(e) {
    e.preventDefault();
    const userName = e.target.name.value;
    const userAge = e.target.age.value;
    dispatch({ type: 'addUser', addName: userName, addAge: userAge });

    // console.log(userName, userAge);
  }

  function handlerNameChange(e) {
    const userName = e.target.value;
    const nameCheck = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,10}$/g;

    if (!nameCheck.test(userName)) {
      alert('이름은 한글만 입력해주세요.');
      e.target.value = '';
      return;
    }
  }

  function handlerAgeChange(e) {
    const userAge = e.target.value;
    const ageCheck = /^[1-9]{1,2}$/g;

    if (!ageCheck.test(userAge)) {
      alert('숫자는 두 자리까지 입력해주세요');
      e.target.value = '';
      return;
    }
  }
  console.log('rendering');

  return (
    <form onSubmit={handleSubmitAddUser}>
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
        <button>저장</button>
      </div>
    </form>
  );
}
