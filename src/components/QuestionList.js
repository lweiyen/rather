import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isQuestionAnswered } from '../utils/common';
import QnSummary from './QnSummary';

class QuestionList extends Component {
  render() {
    return (
      <ul className='list'>
        {this.props.questionIds.map((qid) => (
          <li key={qid}>
            <QnSummary qid={qid} />
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, { showUnanswered }) {
  const thisUser = users[authedUser];
  return {
    questionIds: Object.keys(questions)
      .filter((questionId) => showUnanswered ? !isQuestionAnswered(thisUser,questionId) : isQuestionAnswered(thisUser,questionId))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList);