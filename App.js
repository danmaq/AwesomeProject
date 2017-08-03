import React from 'react';
import { AppRegistry, View } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'cornflowerblue'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);