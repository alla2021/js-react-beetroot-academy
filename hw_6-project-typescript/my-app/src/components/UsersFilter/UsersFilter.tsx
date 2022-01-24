import React from 'React';
import { User } from "../../type";
import UserDetails from "../UserDatails/UserDetails";

interface UserListProps {
  users: User[];
  inputValue: string;
  handelClick: (click: any) => void;
}

function UserFilter({ users, inputValue, handelClick }: UserListProps) {
  return (
    <>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        )
        .map((user) => (
          <UserDetails users={users} handelClick={handelClick}/>
        ))}
    </>
  );
}

export default UserFilter;