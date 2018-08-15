export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_ID = 'ADD_QUESTION_ID';
export const ADD_ANSWER = 'ADD_ANSWER';

export function addAnswer (authedUser, questionId, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    questionId,
    answer
  };
}

export function addQuestionId (author, questionId) {
  return {
    type: ADD_QUESTION_ID,
    author,
    questionId
  };
}

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}