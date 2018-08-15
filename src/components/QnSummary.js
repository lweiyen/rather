import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isQuestionAnswered, getQnSummaryStr } from '../utils/common';
import { Link } from 'react-router-dom';

class QnSummary extends Component {
  render() {
    const { author, qnSummaryStr, isQuestionAnswered, qid } = this.props;
    const { name, avatarURL } = author;
    
    return (
      <div className='question'>
        <div className='question-header'>
          {name} asks
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
        </div>

        <div className='question-content'>
          <span>World you rather</span>
          <span>{qnSummaryStr}</span>
          <Link to={`/questions/${qid}`}>
            <button className='btn'>
              {isQuestionAnswered?'View Poll':'Cast Vote'}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({authedUser, users, questions}, {qid}) {
  return {
    author: users[questions[qid].author],
    qnSummaryStr: getQnSummaryStr(questions[qid]),
    isQuestionAnswered: isQuestionAnswered(users[authedUser], qid),
    qid
  };
}

export default connect(mapStateToProps)(QnSummary);