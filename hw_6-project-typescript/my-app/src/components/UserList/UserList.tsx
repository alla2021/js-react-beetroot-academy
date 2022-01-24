import React from "react";
import { User, Post } from "../../type";
import UserDetails from "../UserDatails/UserDetails";
import "./userList.scss";

interface UserListProps {
  users: User[];
  posts: Post[];
  handelClick: (click: any) => void;
}

const UserList = ({ users, posts, handelClick}: UserListProps) => {
  return (
    <>
      <div className="wrapper">
        <UserDetails users={users} handelClick={handelClick} />
        <ul className="post__list">
          {posts.map((post) => (
            <li key={post.id} className="post__item">
              <span className="post__title">Title:</span>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
