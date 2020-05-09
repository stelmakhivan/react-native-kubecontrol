import React from 'react';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';
import {Icon} from 'native-base';

import Menu from './containers/Menu';
import Profile from './containers/Profile';
import Charts from './components/Charts';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
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
