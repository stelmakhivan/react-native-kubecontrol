import React, {Component} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import NetworkChart from '../components/NetworkChart';
import SaturationChart from '../components/SaturationChart';
import MemUsageChart from '../components/MemUsageChart';
import CpuUsageChart from '../components/CpuUsageChart';

import * as actions from '../actions';
import {Spinner} from './common';

class DashBoard extends Component {
  onRefresh = () => {
    const {apiKey, url} = this.props;
    this.props.fetchMetrics({apiKey, url});
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          // loading feature
          <View style={styles.indicatorContainer}>
            <Spinner size="large" />
          </View>
        ) : (
          <ScrollView
            style={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isLoading}
                onRefresh={this.onRefresh}
              />
            }>
            {Object.keys(this.props).map((dataType, i) => {
              if (dataType === 'networkTraffic') {
                return (
                  <View key={i}>
                    <NetworkChart data={this.props[dataType]} />
                  </View>
                );
              } else if (dataType === 'cpuUsage') {
                return (
                  <View key={i}>
                    <CpuUsageChart data={this.props[dataType]} />
                  </View>
                );
              } else if (dataType === 'memUsage') {
                return (
                  <View key={i}>
                    <MemUsageChart data={this.props[dataType]} />
                  </View>
                );
              } else if (dataType === 'saturation') {
                return (
                  <View key={i}>
                    <SaturationChart data={this.props[dataType]} />
                  </View>
                );
              }
            })}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  scrollView: {
    marginTop: 10,
  },
};

const mapStateToProps = ({metrics, api}) => {
  const {isLoading, cpuUsage, memUsage, networkTraffic, saturation} = metrics;
  const {apiKey, url} = api;
  return {
    isLoading,
    cpuUsage,
    memUsage,
    networkTraffic,
    saturation,
    apiKey,
    url,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMetrics: ({apiKey, url}) =>
    dispatch(actions.fetchMetrics({apiKey, url})),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
