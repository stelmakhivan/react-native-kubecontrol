import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {store, persistor} from './configureStore';
import {PersistGate} from 'redux-persist/integration/react';

import './services/firebase/config';

import RouterComponent from './Router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PersistGate persistor={persistor}>
            <RouterComponent />
          </PersistGate>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
