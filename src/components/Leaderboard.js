import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class Leaderboard extends Component {
  render() {
    const { uids, topScore } = this.props;

    return (
      <div>
        <h2 className='center'>Player Ranking</h2>
        <ul className='list'>
          {uids.map((uid) => (
            <li key={uid}>
              <User uid={uid} topScore={topScore} />
            </li>
          ))}
        </ul>
      </div>
    )            
  }
}

function getUserScore (user) {
  return user.questions.length + Object.keys(user.answers).length;
}

function mapStateToProps ({ users }) {
  const higherScore = (highScore, currentScore) => highScore > currentScore ? highScore : currentScore;

  return {
    uids: Object.keys(users)
      .sort((a,b) => getUserScore(users[b]) - getUserScore(users[a])),
    topScore: Object.values(users)
      .map((user) => getUserScore(user))
      .reduce(higherScore)
  };
}

export default connect(mapStateToProps)(Leaderboard);