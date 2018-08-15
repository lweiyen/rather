import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_VOTE } from '../actions/questions';

export default function questions (state = {}, action) {
  const { question, authedUser, questionId, answer } = action;

  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION :
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_VOTE :
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([authedUser])
          }
        }
      };
    default :
      return state;
  }
}