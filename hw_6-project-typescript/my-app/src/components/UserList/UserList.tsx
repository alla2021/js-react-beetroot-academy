import React from "react";
import { User, Post } from "../../type";
import './userList.scss';

interface UserListProps {
  users: User[];
  posts: Post[];
}

const UserList = ({ posts}: UserListProps) => {
  return (
    <>
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.id} className="posts__item">
              <span className="posts__title">Title:</span>
              {post.title}
            </li>
          ))}
        </ul>
    </>
  );
};


export default UserList;
