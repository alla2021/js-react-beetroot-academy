import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, click, posts }) => {
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
              <button onClick={() => click(user.id)}>Click</button>
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
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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


UserList.propTypes = {
  optionalUnion: PropTypes.shape({
  users: PropTypes.array.isRequired,
  click: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
})};

ListHooks.propTypes = {
  optionalUnion: PropTypes.shape({
  title: PropTypes.string.isRequired,
})};

export default ListHooks;