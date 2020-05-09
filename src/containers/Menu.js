import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {List, ListItem} from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';

class Menu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <List>
            <ListItem>
              <Text>Dashboard</Text>
            </ListItem>
            <ListItem>
              <Text>Profile</Text>
            </ListItem>
          </List>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 2,
  },
});

export default Menu;
