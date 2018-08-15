import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, addQuestionId, addAnswer } from './users';
import { receiveQuestions, addQuestion, addVote } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
  };
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionId(authedUser, question.id));
      dispatch(hideLoading());
    })
  }
}

export function handleCastVote (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(addVote(authedUser, qid, answer));
      dispatch(addAnswer(authedUser, qid, answer));
      dispatch(hideLoading());
    })
  }
}