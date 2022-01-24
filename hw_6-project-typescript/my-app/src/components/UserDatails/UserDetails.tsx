import React from "react";
import { User } from "../../type";

interface UserProps {
  users: User[];
  handelClick: (click: any) => void;
}

const UserDetails = ({ users, handelClick }: UserProps) => {
  return (
    <ul className="user__list">
      {users.map((user) => (
        <li key={user.id} className="user__item">
          Name: {user.name}
          <br />
          Username: {user.username}
          <br />
          Email: {user.email}
          <button key={user.id} onClick={() => handelClick(user.id)}>
            Click
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserDetails;
