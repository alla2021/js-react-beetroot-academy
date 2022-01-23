import React, { useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import {User, Post} from '../../type';

interface UserListProps {
  users: User[];
  posts: Post[];
  handelClick: (any) => void;
}

const UserList = ({users, posts, handelClick}: UserListProps) => {
  return(
    <>
    <div style={{ display: 'flex' }}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.name}
              <br />
              Username: {user.username}
              <br />
              Email: {user.email}
              <br />
              <button onClick={() => handelClick(user.id)}>Click</button>
            </li>
          ))}
        </ul>
        <div>
          {posts.map((post) => (
            <li key={post.id}>Title:{post.title}</li>
          ))}
        </div>
      </div>
    </>
  )
}

const ListHooks = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error :>> ', error));
  }, []);

  // const handelClick = (event: React.MouseEvent<HTMLElement>)  => {
  //   console.log('sssss')
  // }

  const getPostsByUserId = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  return (
    <>
    <h2>react hooks</h2>
      <UserList users={users} posts={posts} handelClick={getPostsByUserId}/>
    </>
  );
};

export default ListHooks;