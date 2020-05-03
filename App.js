import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';

import Charts from './src/components/Charts';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Drawer drawerPosition="left" drawerWidth={300}>
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
