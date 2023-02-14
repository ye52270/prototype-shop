import { useState } from 'react';

export default function UserListComponent({
  users,
  onChangeTask,
  onDeleteTask,
}) {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Task
                user={user}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
              ></Task>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Task({ user, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={user.name}
          onChange={(e) => {
            console.log('user.name', user.name);
            onChange({
              ...user,
              name: e.target.value,
            });
          }}
        />

        <input
          value={user.age}
          onChange={(e) => {
            onChange({
              ...user,
              age: e.target.value,
            });
          }}
        />

        <button onClick={(e) => setIsEditing(false)}>저장</button>
        <button onClick={(e) => setIsEditing(false)}>취소</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{user.name}</span>
        <span>{user.age}</span>
        <button onClick={(e) => setIsEditing(true)}>수정</button>
        <button onClick={(e) => onDelete(user.id)}>삭제</button>
      </>
    );
  }

  return <div>{taskContent}</div>;
}
