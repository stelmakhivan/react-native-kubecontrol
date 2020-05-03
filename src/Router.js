import React from 'react';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';
import {Icon} from 'native-base';

import Charts from './components/Charts';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Drawer
            hideNavBar
            drawerPosition="left"
            drawerWidth={300}
            drawerIcon={<Icon ios="ios-menu" android="md-menu" />}>
            <Scene key="main" title="KubeControl" component={Charts} />
          </Drawer>
        </Scene>
      </Overlay>
    </Router>
  );
};

export default RouterComponent;
