import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <ul>
          {this.state.users.map((item) => (
            <UserCard key={item.id} {...item} />
          ))}
      </ul>
  )
}
}

List.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string
};

export default List;