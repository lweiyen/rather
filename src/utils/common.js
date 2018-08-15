export function isQuestionAnswered (user, questionID) {
  return user.answers.hasOwnProperty(questionID);
}

export function getQnSummaryStr(question) {
  const qnString = question.optionOne.text;
  return `...${qnString.substring(0,15)}...`;
}