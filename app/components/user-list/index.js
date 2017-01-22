import React, { Component, PropTypes } from 'react';
import UserListItem from '../user-list-item';

class UserListComponent extends Component {
  render () {
    const users = this.props.users.map((item, index)=> {
      // TODO: Index is bad to use here, use user ID with real API
      return <UserListItem key={index}
                           firstName={item.firstName}
                           lastName={item.lastName} />;
    });

    return <div>
      {users}
    </div>
  }
}

UserListComponent.propTypes = {
  users: PropTypes.array
};

export default UserListComponent;