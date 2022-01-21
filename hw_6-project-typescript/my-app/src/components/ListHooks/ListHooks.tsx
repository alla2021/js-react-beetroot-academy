import React, { useEffect, useState } from 'react';
import {User, Post} from '../../type';

interface UserListProps {
  users: User[];
  posts: Post[];
}

const UserList = ({users, posts}: UserListProps) => {
  return(
    <>
    <div style={{ display: 'flex' }}>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={(event) => handleClick(user.id)}>
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

const ListHooks = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error :>> ', error));
  }, []);

  const getPostsByUserId : React.MouseEvent<HTMLButtonElement> = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  return (
    <>
    <h2>react hooks</h2>
      <UserList users={users} posts={posts} handleClick={getPostsByUserId}/>
    </>
  );
};

export default ListHooks;