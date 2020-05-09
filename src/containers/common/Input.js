import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#008BAA',
    borderBottomWidth: 1,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0,
    shadowRadius: 3,
    marginBottom: 20,
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
  },
});

export {Input};
