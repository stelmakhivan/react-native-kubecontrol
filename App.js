import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RouterComponent from './src/Router';

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <RouterComponent />
      </SafeAreaProvider>
    );
  }
}

export default App;
