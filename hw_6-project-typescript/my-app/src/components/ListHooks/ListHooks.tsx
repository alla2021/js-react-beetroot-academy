import React, { useEffect, useState } from 'react';
import {User, UserProps, Posts, UserPosts} from '../../type';

const UserList = ({users}: UserProps, {posts}:UserPosts) => {
  return(
    <>
    <div style={{ display: 'flex' }}>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => click(user.id)}>
              Name: {user.name}
              <br />
              Username: {user.username}
              <br />
              Email: {user.email}
              <br />
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

const ListHooks = ({ title }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error :>> ', error));
  }, []);

  const getPostsByUserId = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  return (
    <>
    <h2>react hooks</h2>
      <h1>{title}</h1>
      <UserList users={users} posts={posts} click={getPostsByUserId}/>
    </>
  );
};

export default ListHooks;