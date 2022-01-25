import React from "react";
import { User, Post } from "../../type";
import UserDetails from "../UserDetails/UserDetails";
import './userList.scss';
// import UserFilter from "../UsersFilter/UsersFilter"

interface UserListProps {
  users: User[];
  posts: Post[];
  handelClick: (click: any) => void;
  inputValue: string;
}

const UserList = ({ users, posts, handelClick, inputValue}: UserListProps) => {
  return (
    <>
      <div className='wrapper'>
        <UserDetails users={users} handelClick={handelClick} />
      
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.id} className="posts__item">
              <span className="posts__title">Title:</span>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
