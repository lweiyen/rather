import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import PageNotFound from './PageNotFound';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
    
  render() {
    const { authedUser, loading } = this.props;
    if ( authedUser === null) {
      return (<Login />);
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {loading
              ? null
              : <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/questions/:qid' component={Question} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route component={PageNotFound} />                  
                </Switch>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar? loadingBar.default === 1 : true
  };
}

export default connect(mapStateToProps)(App);