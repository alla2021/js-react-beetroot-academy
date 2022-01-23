import React, { useEffect, useState } from "react";
import { User, Post } from "../../type";
import "./listhooks.scss";

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
            <li key={post.id} className="post__item">Title:{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ListHooks = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("error :>> ", error));
  }, []);

  const getPostsByUserId = (id:'string') => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  return (
    <>
      <UserList users={users} posts={posts} handelClick={getPostsByUserId} />
    </>
  );
};

export default ListHooks;
