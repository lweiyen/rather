export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_VOTE = 'ADD_VOTE';

export function addVote (authedUser, questionId, answer) {
  return {
    type: ADD_VOTE,
    authedUser,
    questionId,
    answer
  };
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}