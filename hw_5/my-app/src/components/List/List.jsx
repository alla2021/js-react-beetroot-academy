import React from 'react';

class UserCard extends React.Component {
  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <li>
        Name: {firstName}
        <br />
        Last Name: {lastName}
        <br />
        Email: {email}
        <br />
      </li>
    );
  }
}

const UserList = ({users}) => {
  return (
    <ul>
      {users.map((item) => (
            <UserCard key={item.firstName} {...item} />
          ))}
    </ul>
  )
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
  }
}

export default List;