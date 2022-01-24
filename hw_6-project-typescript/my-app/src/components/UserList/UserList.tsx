import React from "react";
import { User, Post } from "../../type";
import "./userList.scss";

interface UserListProps {
  users: User[];
  posts: Post[];
  handelClick: (click:any) => void;
}

const UserList = ({ users, posts, handelClick }: UserListProps) => {
  return (
    <>
    <div className="wrapper">
        <ul className="user__list" >
          {users.map((user) => (
            <li key={user.id} className="user__item">
                  Name: {user.name}<br/>
                  Username: {user.username}<br/>
                  Email: {user.email}
              <button key={user.id} onClick={() => handelClick(user.id)}>Click</button>
            </li>
          ))}
        </ul>
        <ul className="post__list">
          {posts.map((post) => (
            <li key={post.id} className="post__item"><span  className="post__title">Title:</span>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;