import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';
import {Icon} from 'native-base';

import Charts from './src/components/Charts';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Drawer
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

class App extends Component {
  render() {
    return <RouterComponent />;
  }
}

const styles = StyleSheet.create({});

export default App;
