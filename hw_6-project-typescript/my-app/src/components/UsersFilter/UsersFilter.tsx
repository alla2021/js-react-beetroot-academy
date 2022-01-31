import React from "react";
import { User } from "../../type";

interface UserListProps {
  users: User[];
  inputValue: string;
  setValue: string;
  handelClick: (click: any) => void;
}

function UserFilter({ users }: UserListProps) {
  const [inputValue, setValue] = useState('');
  const handelSearch: React.ChangeEventHandler<HTMLInputElement> = (text) => {
    return setValue(text.target.value.toLowerCase());
  };
  return (
    <>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        )
        .map((user) => (
          <li key={user.id} className="user__item filter">
              <span>Name: {user.name}</span>
              <span>Name: {user.username}</span>
              <span>Name: {user.email}</span>
              <button onClick={() => handelClick(user.id)}>Click</button>
            </li>
        ))}
    </>
  );
}

export default UserFilter;

