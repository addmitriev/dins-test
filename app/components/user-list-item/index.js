import React, { Component, PropTypes } from 'react';

class UserListItemComponent extends Component {
  render () {
    const { firstName, lastName } = this.props;
    return <div>{firstName} - {lastName}</div>;
  }
}

UserListItemComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserListItemComponent;