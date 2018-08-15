import React, { Component } from 'react'
import { connect } from 'react-redux';

class NavUser extends Component {
  render() {
    const { authedUser, users } = this.props;
    if ( authedUser === null) {
      return null;
    }
    const { name, avatarURL } = users[authedUser];

    return (
      <li>
        <div>
          Hello!
          <img src={avatarURL} alt={`Avatar of ${name}`} className='thumbnail' />
          {name} 
        </div>
      </li>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(NavUser);