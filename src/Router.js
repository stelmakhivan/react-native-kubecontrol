import React from 'react';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';
import {Icon} from 'native-base';

import Menu from './containers/Menu';
import Profile from './containers/Profile';
import LoginForm from './containers/LoginForm';
import SignupForm from './containers/SignupForm';

import Charts from './components/Charts';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Scene key="login" hideNavBar title="Login" component={LoginForm} />
          <Scene key="signup" title="Signup" component={SignupForm} />

          <Drawer
            contentComponent={Menu}
            hideNavBar
            drawerPosition="left"
            drawerWidth={300}
            drawerIcon={<Icon ios="ios-menu" android="md-menu" />}>
            <Scene key="main" title="KubeControl" component={Charts} />
            <Scene key="profile" title="Profile" component={Profile} />
          </Drawer>
        </Scene>
      </Overlay>
    </Router>
  );
};

export default RouterComponent;
