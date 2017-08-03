import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.text = { "showText": true };
    setInterval(() => {
      this.setState(p => ({ "showText": (p ? !p["showText"] : true) }));
    }, 1500);
  }
  render() {
    const state = this.state;
    const str = state && state.showText ? this.props.name : '■■■■■■';
    return (
      <Text>Hello {str}!</Text>
    );
  }
}

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Enna Braun" />
        <Greeting name="Grace Braun" />
        <Greeting name="Ark Wimmer" />
        <Greeting name="Gordon Bollmann" />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);