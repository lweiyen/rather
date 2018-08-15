import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCastVote } from '../actions/shared';

class VotePage extends Component {
  state = {
    selectedOption: ''
  };

  handleChange = (e) => {
    e.persist();
    this.setState(() => ({
      selectedOption: e.target.value
    }))
  };

  handleSummit = (e) => {
    e.preventDefault();  
    const { selectedOption } = this.state;
    const { qid, dispatch } = this.props;
    dispatch(handleCastVote(qid, selectedOption));
  };
  
  render() {
    const { selectedOption } = this.state;
    const { author, optionOneText, optionTwoText } = this.props;
    const { name, avatarURL } = author;

    return (
      <div>
        <h2 className='center'>Make the Choice</h2>
        <div className='question'>
          <div className='question-header'>
            {name} asks
            <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
          </div>
          <div className='question-content'>
            <span>World you rather</span>
            <form onSubmit={this.handleSummit}>
              <label>
                <input type='radio' value='optionOne' checked={selectedOption === 'optionOne'} onChange={this.handleChange} />
                {optionOneText}
              </label>
              <label>
                <input type='radio' value='optionTwo' checked={selectedOption === 'optionTwo'} onChange={this.handleChange} />
                {optionTwoText}
              </label>
              <button className='btn' type='submit' disabled={selectedOption === ''}>       
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({users, questions}, {qid}) {
  return {
    qid,
    author: users[questions[qid].author],
    optionOneText: questions[qid].optionOne.text,
    optionTwoText: questions[qid].optionTwo.text
  };
}

export default connect(mapStateToProps)(VotePage);