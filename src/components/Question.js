import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isQuestionAnswered } from '../utils/common';
import ResultPage from './ResultPage';
import VotePage from './VotePage';
import { Redirect } from 'react-router-dom';

class Question extends Component {
  render() {
    const { qid, isQuestionValid, isQuestionAnswered } = this.props;
    
    if (!isQuestionValid) {
      return <Redirect to='/404' />
    }

    return isQuestionAnswered
      ? (<ResultPage qid={qid} />)
      : (<VotePage qid={qid} />);
  }
}

function mapStateToProps ({authedUser, users, questions}, props) {
  const { qid } = props.match.params;
  const isQuestionValid = questions.hasOwnProperty(qid);
  
  return {
    qid,
    isQuestionValid,
    isQuestionAnswered: isQuestionValid ? isQuestionAnswered(users[authedUser], qid) : false
  };
}

export default connect(mapStateToProps)(Question);