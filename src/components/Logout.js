import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearAuthedUser } from '../actions/authedUser';

class Logout extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(clearAuthedUser()); // clear authenticated user
    this.props.history.push('/') // go back to home page
  };

  render() {
    return (
      <li onClick={this.handleLogout}>
        <div>
          Logout
        </div>
      </li>
    );
  }
}

export default withRouter(connect()(Logout));