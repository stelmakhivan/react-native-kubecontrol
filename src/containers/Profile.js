import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Card, Input, CardSection} from './common';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input placeholder="type here" />
          </CardSection>
          <CardSection>
            <Input placeholder="type here" />
          </CardSection>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#008BAA',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#008BAA',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
});

export default Profile;
