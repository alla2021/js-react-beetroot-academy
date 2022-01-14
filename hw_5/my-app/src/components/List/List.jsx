import React from 'react';

class UserCard extends React.Component {
  render() {
    const { name, username, email } = this.props;
    return (
      <li>
        Name: {name}
        <br />
        Username: {username}
        <br />
        Email: {email}
        <br />
      </li>
    );
  }
}

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.fetchUsers();
}

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log('data ----->', data))
      .then((data) => this.setState({users: data}))
  }

  render() {
    // const { users } = this.props;
    const { users } = this.state;
    return (
      <ul>
          {users.map((item) => (
            <UserCard {...item} />
          ))}
          {/* {users.map((name, username, email) => (
            <li>Name: {name}; Username: {username}; Email: {email}</li>
          ))} */}
      </ul>
  )
}
}

export default List;