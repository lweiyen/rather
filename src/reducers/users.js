import { RECEIVE_USERS, ADD_QUESTION_ID, ADD_ANSWER } from '../actions/users';

export default function users (state = {}, action) {
  const { author, authedUser, questionId, answer } = action;

  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION_ID :
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([questionId])
        }
      };
    case ADD_ANSWER :
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
          }
        }
      };
    default :
      return state;
  }
}