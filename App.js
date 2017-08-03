import React from 'react';
import { AppRegistry, View } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'cornflowerblue'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);