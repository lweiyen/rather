import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultPage extends Component {
  render() {
    const { author, optionOneText, optionTwoText, authedUserAnswer, optionOneVotes, optionTwoVotes } = this.props;
    const { name, avatarURL } = author;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePct = ((optionOneVotes / totalVotes) * 100).toFixed(1);
    const optionTwoPct = ((optionTwoVotes / totalVotes) * 100).toFixed(1);

    return (
      <div>
        <h2 className='center'>Poll Result</h2>
        <div className='question'>
          <div className='question-header'>
            {name} asked
            <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
          </div>
          <div className='question-content'>
            <div>
              <div> <em> {authedUserAnswer === 'optionOne' ? 'Option 1 (Your choice)' : 'Option 1'} </em> </div>
              <div> {`"Would you rather ${optionOneText}?"`} </div>
              <div> {`obtains ${optionOneVotes} out of ${totalVotes} votes (${optionOnePct}%)`} </div>
            </div>
            <div>
              <div> <em> {authedUserAnswer === 'optionTwo' ? 'Option 2 (Your choice)' : 'Option 2'} </em> </div>
              <div> {`"Would you rather ${optionTwoText}?"`} </div>
              <div> {`obtains ${optionTwoVotes} out of ${totalVotes} votes (${optionTwoPct}%)`} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({authedUser, users, questions}, {qid}) {
  const question = questions[qid];

  return {
    author: users[question.author],
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text,
    authedUserAnswer: users[authedUser].answers[qid],
    optionOneVotes: question.optionOne.votes.length,
    optionTwoVotes: question.optionTwo.votes.length
  };
}

export default connect(mapStateToProps)(ResultPage);