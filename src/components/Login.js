import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import LoadingBar from 'react-redux-loading';

class Login extends Component {
  state = {
    selectedUser: ''
  };

  handleChange = (e) => {
    e.persist();
    this.setState(() => ({
      selectedUser: e.target.value
    }))
  };

  handleSummit = (e) => {
    e.preventDefault();
    const { selectedUser } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(selectedUser));
  };
  
  render() {
    const { selectedUser } = this.state;
    const { users, loading } = this.props;
    const uids = Object.keys(users);

    return (
      <div className='center'>
        <LoadingBar />
        <div>
          <h3> Welcome to the Would You Rather App! </h3>
          <h4> Where hard choices are made and shared </h4>
          <p> Please login to proceed ... </p>
        </div>
        <div className='login'>
          <form onSubmit={this.handleSummit}>
            {loading? 'Loading users...' :uids.map((uid) => (
              <label key={uid}>
                <input type='radio' value={uid} checked={selectedUser === uid} onChange={this.handleChange} />
                <img src={users[uid].avatarURL} alt={`Avatar of ${users[uid].name}`} className='thumbnail' />
                {users[uid].name}
              </label>
            ))}
            <button
              className='btn'
              type='submit'
              disabled={selectedUser === ''}>       
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ users, loadingBar }) {
  return {
    users,
    loading: loadingBar? loadingBar.default === 1 : true
  };
}

export default connect(mapStateToProps)(Login);