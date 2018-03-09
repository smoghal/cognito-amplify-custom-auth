import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {  Sidebar, Menu, Segment, Label } from 'semantic-ui-react';

import { logout as logoutAction } from '../actions/auth_actions';

const WelcomeScreen = () => (
  <Segment basic textAlign="center" className="welcome-page">
    <Label basic size="large">Welcome</Label>
    <p>Super secret contents</p>
  </Segment>
);

// Custom Route component that passes a property ('mode') to the routed component
const RouteWithProps = ({ component: ReactComponent, mode, ...rest}) => {
  console.log('Main.RouteWithProps() mode:', mode)
  return (
    <Route {...rest} render={props => ( <ReactComponent mode={mode} {...props} /> )} />
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  componentWillMount() {
    this.setState(() => {
      return {
        visible: true
      };
    });
  }

  onSignOut() {
    console.log('Main.signout()');

    // logout
    this.props.action.logoutAction({username: 'admin'}, this.props.history);
  }

  render() {
    const { visible } = this.state || {};

    return (
      <div className="main">
        <Router>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} width="thin" visible={visible} vertical>
              <Menu.Item name="home">
                Home
              </Menu.Item>
              <Menu.Item name="page1" link>
                <Link to="/main/page1" className="menu-text">Page1</Link>
              </Menu.Item>
              <Menu.Item name="page2">
                <Link to="/main/page2" className="menu-text">Page2</Link>
              </Menu.Item>
              <Menu.Item name="logout" onClick={this.onSignOut}>
                Logout
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Switch>
                  <Route exact path="/main" component={WelcomeScreen} />
                  <Route exact path="/main/page1" component={WelcomeScreen} />
                  <RouteWithProps exact path="/main/page1/stuff" component={WelcomeScreen} mode="parameter1" />
                  <Route exact path="/main/page2" component={WelcomeScreen} />
                  <RouteWithProps exact path="/main/page2/stuff" component={WelcomeScreen} mode="parameter2" />
                </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Router>
      </div>
    );
  }
}

// Runtime type checking for React props
Main.propTypes = {
  action: PropTypes.object,
  history: PropTypes.object
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  //console.log('Main.mapDispatchToProps() ');

  // approach #1
  // return {
  //   ...bindActionCreators({ logoutAction }, dispatch),
  //   dispatch
  // };

  // approach #2
  return {
    action: bindActionCreators({ logoutAction }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
