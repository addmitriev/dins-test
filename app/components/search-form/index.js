import React, { Component, PropTypes } from 'react';

class SearchFormComponent extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    if (this.props.fetching) {
      return false;
    }

    const firstName = this.firstName.value;
    const lastName = this.lastName.value;

    this.props.search(firstName, lastName);
  }

  render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>First name</span>
          <input type="text" ref={node => this.firstName = node} />
        </label>
        <label>
          <span>Last name</span>
          <input type="text" ref={node => this.lastName = node} />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>;
  }
}

SearchFormComponent.propTypes = {
  search: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
};

export default SearchFormComponent;