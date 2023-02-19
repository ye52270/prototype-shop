import UserListComponent from '../src/components/UserListComponent';
import AddUserComponent from '../src/components/AddUserComponent';
import { useReducer } from 'react';

let initialUsers = [
  { id: 0, name: '홍길동', age: 25 },
  { id: 1, name: '이순신', age: 33 },
  { id: 2, name: '강감찬', age: 12 },
];
let nextId = 3;

function handleUserReducer(users, action) {
  switch (action.type) {
    case 'add': {
      return [...users, { id: action.id, name: action.name, age: action.age }];
    }
    case 'edit': {
      return users.map((user) => {
        if (user.id === action.user.id) {
          return action.user;
        } else {
          return user;
        }
      });
    }
    case 'delete': {
      return users.filter((user) => {
        return user.id !== action.id;
      });
    }
  }
}

function App() {
  const [users, dispatch] = useReducer(handleUserReducer, initialUsers);

  function handleAddTask(name, age) {
    dispatch({ type: 'add', id: nextId++, name: name, age: age });
  }

  function handleEditTask(user) {
    dispatch({ type: 'edit', user: user });
  }

  function handleDeleteTask(id) {
    dispatch({ type: 'delete', id: id });
  }

  console.log(users);

  return (
    <div>
      <AddUserComponent onAddTask={handleAddTask} />
      <UserListComponent
        users={users}
        onChangeTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
