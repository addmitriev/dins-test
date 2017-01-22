import React, { Component } from 'react';
import UserListItem from '../user-list-item';

class UserListComponent extends Component {
  render () {
    const users = (new Array(5)).fill(<UserListItem />);

    return <div>
      User list
      {users}
    </div>
  }
}

export default UserListComponent;