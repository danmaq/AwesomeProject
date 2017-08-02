import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Enna" />
        <Greeting name="Grace" />
        <Greeting name="Ark" />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);