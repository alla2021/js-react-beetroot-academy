import React from "react";
import { User } from "../../type";
import './userdetails.scss';

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
          Username: {user.username}
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
