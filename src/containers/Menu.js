import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../assets/images/kubX.png')}
          />
        </View>
        <View style={styles.listContainer}>
          <List>
            <ListItem onPress={Actions.main}>
              <Text>Dashboard</Text>
            </ListItem>
            <ListItem onPress={Actions.profile}>
              <Text>Profile</Text>
            </ListItem>
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
  },
  listContainer: {
    flex: 2,
  },
});

export default Menu;
