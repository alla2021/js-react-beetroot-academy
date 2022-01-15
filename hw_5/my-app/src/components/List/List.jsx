import React from 'react';
import PropTypes from 'prop-types';

// class UserCard extends React.Component {
//   render() {
//     const { name, username, email } = this.props;

//     return (
//       <li>
//         Name: {name}
//         <br />
//         Username: {username}
//         <br />
//         Email: {email}
//         <br />
//       </li>
//     );
//   }
// }

const UserList = ({ users, click, posts }) => {
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
            <li key={post.id}>{post.body}</li>
          ))}
        </div>
      </div>
    </>
  )
}

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
}

componentDidMount() {
  this.fetchUsers()
}

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // .then((data) => console.log('data ----->', data))
      .then((data) => this.setState({ users: data }));
  }

  getPostsByUserId(id) {
    console.log('this', this)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    const { users, posts } = this.state;
    return (
      users.lenght !== 0 && (
        <UserList users={users} posts={posts} click={(id) => this.getPostsByUserId(id)}/>
      )
      // <ul>
      //     {users.map((item) => (
      //       <UserCard key={item.id} {...item} />
      //     ))}
      // </ul>
  )
}
}

List.propTypes = {
  optionalUnion: PropTypes.shape({
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
})};

export default List;