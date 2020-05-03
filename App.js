import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Charts from './src/components/Charts';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Charts />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
