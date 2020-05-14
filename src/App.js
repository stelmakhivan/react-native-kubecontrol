import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {store} from './configureStore';

import RouterComponent from './Router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <RouterComponent />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
