import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Scene,
  Router,
  Drawer,
  Overlay,
  Actions,
} from 'react-native-router-flux';
import {Icon, Header, Left, Body, Right, Title} from 'native-base';

import Menu from './containers/Menu';
import Profile from './containers/Profile';
import LoginForm from './containers/LoginForm';
import SignupForm from './containers/SignupForm';
import DashBoard from './containers/DashBoard';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  icons: {
    marginLeft: 5,
    fontSize: 30,
  },
  body: {
    flex: 3,
  },
  title: {
    fontSize: 20,
  },
});

const DashBoardHeader = () => {
  return (
    <Header style={styles.header}>
      <Left>
        <Icon
          style={styles.icon}
          onPress={Actions.drawerOpen}
          name="ios-menu"
        />
      </Left>
      <Body style={styles.body}>
        <Title style={styles.title}>KubeControl</Title>
      </Body>
      <Right />
    </Header>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Scene key="login" hideNavBar title="Login" component={LoginForm} />
          <Scene key="signup" title="Signup" component={SignupForm} />

          <Drawer
            contentComponent={Menu}
            hideNavBar
            drawerPosition="left"
            drawerWidth={300}
            drawerIcon={<Icon ios="ios-menu" android="md-menu" />}>
            <Scene
              key="main"
              title="KubeControl"
              component={DashBoard}
              navBar={DashBoardHeader}
            />
            <Scene key="profile" title="Profile" component={Profile} />
          </Drawer>
        </Scene>
      </Overlay>
    </Router>
  );
};

export default RouterComponent;
