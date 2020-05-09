import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: null,
    };
  }
  renderButtons = () => {
    return (
      <>
        <View style={styles.buttonContainer}>
          <Button>Login</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={Actions.signup}>Signup</Button>
        </View>
      </>
    );
  };

  onEmailChange = (email) => {
    this.setState({
      email,
    });
  };

  onPasswordChange = (password) => {
    this.setState({
      password,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input
              value={this.state.email}
              onChangeText={this.onEmailChange}
              label="Email"
              placeholder={'email@email.com'}
            />
          </CardSection>
          <CardSection>
            <Input
              value={this.state.password}
              onChangeText={this.onPasswordChange}
              label="Password"
              placeholder={'password'}
              secureTextEntry
            />
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

export default LoginForm;
