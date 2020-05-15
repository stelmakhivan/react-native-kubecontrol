import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Card, CardSection, Input, Button} from './common';

import {connect} from 'react-redux';
import * as actions from '../actions';

class SignupForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const {email, password} = this.props;
    this.props.signupUser({email, password});
  };

  renderButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={this.onButtonPress}>Login</Button>
      </View>
    );
  };

  renderError() {
    if (this.props.signupError) {
      return (
        <View>
          <Text style={styles.errorText}>{this.props.signupError}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input
              value={this.props.email}
              label="Email"
              onChangeText={this.onEmailChange}
              placeholder={'email@email.com'}
            />
          </CardSection>
          <CardSection>
            <Input
              value={this.props.password}
              onChangeText={this.onPasswordChange}
              label="Password"
              placeholder="password"
              secureTextEntry
            />
          </CardSection>
          {this.renderError()}
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
    marginBottom: 5,
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginBottom: 20,
  },
});

const mapStateToProps = ({auth}) => {
  const {email, password, signupError, loading} = auth;

  return {email, password, signupError, loading};
};

const mapDispatchToProps = (dispatch) => ({
  emailChanged: (text) => dispatch(actions.emailChanged(text)),
  passwordChanged: (text) => dispatch(actions.passwordChanged(text)),
  signupUser: (email, password) =>
    dispatch(actions.signupUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
