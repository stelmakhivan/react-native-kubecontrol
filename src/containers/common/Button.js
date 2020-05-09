import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#008BAA',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#008BAA',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
});

export {Button};
