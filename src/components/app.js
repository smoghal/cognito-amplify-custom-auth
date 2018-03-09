import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { validateUserSession as validateUserAction } from '../actions/auth_actions';
import PropTypes from 'prop-types';

import Login from './auth/login';
import Forget from './auth/forget';
import Register from './auth/register';
import Main from './main';

const PublicRoute = ({ component: ReactComponent, authStatus, ...rest}) => (
  <Route {...rest} render={props => typeof authStatus === 'undefined' || authStatus == false ?
    ( <ReactComponent {...props} /> ) : (<Redirect to="/main" />)
  } />
);

const PrivateRoute = ({ component: ReactComponent, authStatus, ...rest}) => (
  <Route {...rest} render={props => typeof authStatus === 'undefined' || authStatus == false ?
    ( <Redirect to="/login" /> ) : ( <ReactComponent {...props} /> )
  } />
);

const DefaultRoute = ({ authStatus, ...rest}) => {
  console.log('App.DefaultRoute() authStatus:', authStatus)
  return (
    <Route {...rest} render={props => typeof authStatus === 'undefined' || authStatus == false ?
      ( <Redirect to="/login" /> ) : ( <Redirect to="/main" /> )
    } />
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  componentWillMount() {
    console.log('App.componentWillMount() props: ', this.props);
    // if session contains valid
    this.validateUser();
    window.addEventListener('beforeunload', this.handleWindowClose);
  }

  componentWillUnMount() {
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }

  handleWindowClose = async e => {
    e.preventDefault();
    // dispatch a UNAUTH_USER action to invoke Cognito
  }

  validateUser() {
    // get current authenticated user
    this.props.validateUserAction();
  }

  render() {

    console.log('App.render() props: ', this.props);

    return (
      <Router>
        <Switch>

          <DefaultRoute exact path="/" authStatus={this.props.authenticated} />
          <PublicRoute exact path="/login" component={Login} authStatus={this.props.authenticated} />
          <PublicRoute exact path="/forget" component={Forget} authStatus={this.props.authenticated} />
          <PublicRoute exact path="/register" component={Register} authStatus={this.props.authenticated} />
          <PrivateRoute exact path="/main" component={Main} authStatus={this.props.authenticated} />

        </Switch>
      </Router>
    );
  }
}

// Runtime type checking for React props
App.propTypes = {
  validateUser: PropTypes.func,
  history: PropTypes.object,
  errorMessage: PropTypes.string
};


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      validateUserAction}, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
