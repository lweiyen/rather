import React, { Component } from 'react';
import QuestionList from './QuestionList';
import ViewSelection from './ViewSelection';

class Home extends Component {
  state = {
    showUnanswered: true // for state of current view
  };

  toggleShowUnanswered = () => {
    this.setState(prevState => ({showUnanswered: !prevState.showUnanswered}));
  };

  render() {
    return (
      <div>
        <ViewSelection showUnanswered={this.state.showUnanswered} handleToggle={this.toggleShowUnanswered} />
        <QuestionList showUnanswered={this.state.showUnanswered} />
      </div>
    )
  }
}

export default Home;