/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import { startCase } from 'lodash'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import { data } from './data'
//import all the components we will need

function isEven(n) {
  return n % 2 == 0;
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    var that = this
    that.setState({
      //Setting the data source
      dataSource: data,
    });
  }

  renderRow (item, index, separators) {
    const { dataSource } = this.state
    const color = isEven(index) ? '#c0c0c0' : '#fff';
    const header = dataSource.map(head => head.attributes.day)
    return (
      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', marginLeft: 30 }}>
        {header.map((label, ix) => (
          <View key={ix} style={{ flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: color }}>
              <Text style={{paddingRight:20, width: 100}}>{startCase(label)}</Text>
              <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 100, height: 50}}><CheckBox /></View>
                  <View style={{width: 100, height: 50}}><CheckBox /></View>
                </View>
            </View>
          </View>
        ))}
      </View>
    )
  }

  renderTableHeader () {
    const tableHeader = ['Days', 'Am', 'Pm']
    return (
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 30}}>
      {tableHeader.map((label, ix) => (
      <View>
      <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 35}}>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>{label}</Text>
                  </View>
                  <View style={{width: 60, height: 50}}/>
                </View>
        <View style={{width: 50}}>
        
        </View>
      </View>
      ))}
      </View>
    )
  }
  render() {
    const { dataSource } = this.state
    const header = dataSource.map(head => head.attributes.day)
    console.log(dataSource)
    console.log(header)
    return (
      <View style={styles.MainContainer}>
      <View>{this.renderTableHeader()}</View>
       <View>{this.renderRow()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
});
