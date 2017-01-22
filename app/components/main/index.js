import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import SearchForm from '../search-form'
import UserList from '../user-list'

import * as usersActions from '../../actions/users';

class MainComponent extends Component {

  constructor (props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentDidMount () {
    this.props.getUsers();
  }

  search (firstName, lastName) {
    this.props.getUsers({ firstName, lastName });
  }

  render () {
    const { fetching, users }= this.props;

    return <div>
      <SearchForm search={this.search} fetching={fetching} />
      <UserList users={users} />
    </div>;
  }
}

MainComponent.propTypes = {
  fetching: PropTypes.bool,
  users: PropTypes.array,
  getUsers: PropTypes.func
};

function mapStateToProps (state) {
  return state.users;
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)