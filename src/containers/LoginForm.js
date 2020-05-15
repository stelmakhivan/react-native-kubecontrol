import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import * as actions from '../actions';

import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const {email, password} = this.props;
    Actions.signup();
    // this.props.loginUser({email, password});
  };

  renderButtons = () => {
    return (
      <>
        <View style={styles.buttonContainer}>
          <Button>Login</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onButtonPress}>Signup</Button>
        </View>
      </>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input
              value={this.props.email}
              onChangeText={this.onEmailChange}
              label="Email"
              placeholder={'email@email.com'}
            />
          </CardSection>
          <CardSection>
            <Input
              value={this.props.password}
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

const mapStateToProps = ({auth}) => {
  const {email, password, loginError, loading} = auth;

  return {email, password, loginError, loading};
};

const mapDispatchToProps = (dispatch) => ({
  emailChanged: (text) => dispatch(actions.emailChanged(text)),
  passwordChanged: (text) => dispatch(actions.passwordChanged(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
