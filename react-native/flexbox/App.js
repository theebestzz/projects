import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Pin from "./app/components/Pin";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Pin />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 3,
    backgroundColor: '#FFEEE4',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#F17F42'
  },
  boxThree: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#CE6D39'
  }
})