import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Card, CardSection, Input, Button} from './common';

class SignupForm extends Component {
  renderButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={Actions.login}>Login</Button>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input label="Company Name" placeholder={'Cool Company LLC'} />
          </CardSection>
          <CardSection>
            <Input label="Email" placeholder={'email@email.com'} />
          </CardSection>
          <CardSection>
            <Input label="Password" placeholder={'password'} secureTextEntry />
          </CardSection>
          {this.renderButtons()}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 50,
    margin: 4,
  },
});

export default SignupForm;
