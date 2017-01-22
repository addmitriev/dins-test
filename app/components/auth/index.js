import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';

class AuthComponent extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate (nextProps) {
    if (nextProps.token !== null) {
      this.props.router.replace('/');
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    if (this.props.fetching) {
      return;
    }

    const email = this.email.value;
    const password = this.password.value;

    this.props.auth(email, password);
  }

  render () {
    return (<div>
      {this.props.error}
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Email</span>
          <input type="text" ref={node => this.email = node} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" ref={node => this.password = node} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>);
  }
}

AuthComponent.propTypes = {
  token: PropTypes.string,
  fetching: PropTypes.bool,
  error: PropTypes.string,
  auth: PropTypes.func,
  router: PropTypes.object
};

function mapStateToProps (state) {
  return state.auth;
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(authActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)
