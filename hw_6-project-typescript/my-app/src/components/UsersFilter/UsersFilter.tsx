import React from "react";
import { User } from "../../type";
// import UserDetails from "../UserDetails/UserDetails";

interface UserListProps {
  users: User[];
  inputValue: string;
  handelClick: (click: any) => void;
}

function UserFilter({ users, inputValue, handelClick }: UserListProps) {
  return (
    <>
    <div className="users">
      {users
        .filter((user) =>
          user.name.includes(inputValue.toLowerCase().trim())
        )
        .map((user) => (
          <div key={user.id} className="users__item">
          <span>Name: {user.name}</span>
          <span>Username: {user.username}</span>
          <span>Email: {user.email}</span>
          <button className="btn" key={user.id} onClick={() => handelClick(user.id)}>
            Click
          </button>
        </div>
        ))
        }
      </div>
    </>
  );
}

export default UserFilter;
