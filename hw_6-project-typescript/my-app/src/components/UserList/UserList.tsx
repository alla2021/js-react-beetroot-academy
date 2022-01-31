import React from "react";
import { User, Post } from "../../type";
import "./userList.scss";
import UserFilter from '../UsersFilter/UsersFilter'

interface UserListProps {
  users: User[];
  posts: Post[];
  handelClick: (click: any) => void;
  inputValue: string;
}

const UserList = ({ users, posts, handelClick, inputValue }: UserListProps) => {
  return (
    <>
      {/* <ul className="user">
        {users.map((user) => (
         <li key={user.id} className="users__item">
         <span>Name: {user.name}</span>
         <span>Name: {user.username}</span>
         <span>Name: {user.email}</span>
         <button onClick={() => handelClick(user.id)}>Click</button>
       </li>
        ))}
      </ul> */}
       <UserFilter users={users} inputValue={inputValue} handelClick={handelSearch}/>
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
