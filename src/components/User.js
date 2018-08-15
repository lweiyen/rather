import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { isAuthedUser, user, topScore } = this.props;
    const { name, avatarURL } = user;
    const qnScore = user.questions.length;
    const ansScore = Object.keys(user.answers).length;
    const userScore = qnScore + ansScore;
    
    return (
      <div className='user'>
        <div className='user-header'>
          {isAuthedUser? `${name} (You)` : name}
          <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
        </div>
        <div className='user-score'>
          <em className='center'> Score Summary </em>
          <span>Questions Answered: {ansScore} </span>
          <span>Questions Created: {qnScore} </span>
          <span>Total Score: {userScore === topScore? `${userScore} (Top Score!!)` : userScore} </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({authedUser, users}, {uid, topScore}) {
  return {
    isAuthedUser: uid === authedUser,
    user: users[uid],
    topScore
  };
}

export default connect(mapStateToProps)(User);