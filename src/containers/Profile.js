import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

import {Card, Input, CardSection, Button} from './common';

class Profile extends Component {
  onUrlChange = (text) => {
    this.props.urlEntry(text);
  };

  onAPIChange = (text) => {
    this.props.apiEntry(text);
  };

  onButtonPress = () => {
    const {apiKey, url} = this.props;
    this.props.fetchMetrics({apiKey, url});
  };

  renderButton = () => {
    return (
      <View style={styles.btnContainer}>
        <Button onPress={this.onButtonPress}>Fetch Metrics</Button>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input
              label="Grafana Url"
              secureTextEntry
              placeholder="Grafana Url"
              value={this.props.url}
              onChangeText={this.onUrlChange}
            />
          </CardSection>
          <CardSection>
            <Input
              label="API Key"
              placeholder="API Key"
              secureTextEntry
              value={this.props.apiKey}
              onChangeText={this.onAPIChange}
            />
          </CardSection>
          {this.renderButton()}
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

  btnContainer: {
    height: 50,
    marginBottom: 4,
  },
});

const mapStateToProps = ({api}) => {
  const {loading, apiKey, url} = api;

  return {loading, apiKey, url};
};

const mapDispatchToProps = (dispatch) => ({
  apiEntry: (text) => dispatch(actions.apiEntry(text)),
  urlEntry: (text) => dispatch(actions.urlEntry(text)),
  fetchMetrics: ({apiKey, url}) =>
    dispatch(actions.fetchMetrics({apiKey, url})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
