import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    text1: '',
    text2: '',
  };

  handleChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.id]: e.target.value
    }))
  };

  handleSummit = (e) => {
    e.preventDefault();
    const { text1, text2 } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(text1, text2)); //dispatch add new question
    this.props.history.push('/'); //return to home page upon submission
  };

  render() {
    const { text1, text2 } = this.state;

    return (
      <div>
        <h2 className='center'>Compose new Question</h2>
        <form className='new-question' onSubmit={this.handleSummit}>
          <h3 className='center'> Would you rather ... </h3>
          <textarea
            id='text1'
            placeholder='Enter Option 1 here...'
            value={text1}
            onChange={this.handleChange}
            className='textarea'
          />
          <h3 className='center'> or ... </h3>
          <textarea
            id='text2'
            placeholder='Enter Option 2 here...'
            value={text2}
            onChange={this.handleChange}
            className='textarea'
          />
          <button
            className='btn'
            type='submit'
            disabled={text1 === ''|| text2 === ''}>       
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion));