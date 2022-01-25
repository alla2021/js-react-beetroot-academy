import React from "react";
import { User } from "../../type";
import './userdetails.scss';

interface UserProps {
  users: User[];
  handelClick: (click: any) => void;
}

const UserDetails = ({ users, handelClick }: UserProps) => {
  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id} className="users__item">
          <span>Name: {user.name}</span>
          <span>Username: {user.username}</span>
          <span>Email: {user.email}</span>
          <button className="btn" key={user.id} onClick={() => handelClick(user.id)}>
            Click
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
