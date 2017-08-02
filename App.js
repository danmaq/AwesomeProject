import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (<Text>Hello, world!</Text>);
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);