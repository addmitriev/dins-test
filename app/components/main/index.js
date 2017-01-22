import React, { Component } from 'react';
import SearchForm from '../search-form'
import UserList from '../user-list'

class MainComponent extends Component {
  render () {
    return <div>
      <SearchForm />
      <UserList />
    </div>;
  }
}

export default MainComponent;