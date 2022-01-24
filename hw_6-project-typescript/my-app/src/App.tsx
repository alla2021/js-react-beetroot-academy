import React, { useEffect, useState } from "react";
import { User, Post } from "./type";
import Search from "../src/components/Search/Search";
import UserList from "../src/components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputValue, setValue] = useState('');

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
      <Search value={inputValue} checkChange={(value) => setValue(value)} />
      <UserList users={users} posts={posts} handelClick={getPostsByUserId} />
    </>
  );
};

export default App;