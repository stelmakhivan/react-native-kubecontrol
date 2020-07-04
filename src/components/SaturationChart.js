import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from 'victory-native';

const victoryChartPadding = {
  top: 0,
  left: 70,
  right: 10,
  bottom: 30,
};

const padding = {
  top: 0,
  left: 10,
  right: 10,
  bottom: 30,
};

const styles = {
  headerWrapper: {
    alignSelf: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginTop: 50,
    marginRight: 10,
    marginBottom: 10,
    borderTopColor: '#ff8300',
    borderBottomColor: '#ddd',
    borderTopWidth: 5,
    borderBottomWidth: 1,
    position: 'relative',
  },
  header: {
    alignSelf: 'flex-start',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#ff8300',
  },
};

const lineTheme = {
  data: {
    stroke: '#ff8300',
    strokeWidth: 1,
  },
  parent: {
    border: '1px solid #000',
  },
};

export default class SaturationChart extends Component {
  state = {
    zoomDomain: null,
    selectedDomain: null,
  };

  handleZoom = (domain) => {
    this.setState({selectedDomain: domain});
  };

  handleBrush = (domain) => {
    this.setState({zoomDomain: domain});
  };

  handleTick = (x) => {
    const date = new Date(x * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  };

  render() {
    return (
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Saturation</Text>
        </View>
        <VictoryChart
          responsive
          padding={victoryChartPadding}
          height={250}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom}
            />
          }>
          <VictoryAxis dependentAxis tickFormat={(x) => x + '%'} />
          <VictoryAxis tickFormat={this.handleTick} />
          <VictoryLine style={lineTheme} data={this.props.data} />
        </VictoryChart>
        <VictoryChart
          responsive
          padding={padding}
          height={90}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={this.state.selectedDomain}
              onBrushDomainChange={this.handleBrush}
            />
          }>
          <VictoryAxis tickFormat={this.handleTick} />
          <VictoryLine style={lineTheme} data={this.props.data} />
        </VictoryChart>
      </View>
    );
  }
}
