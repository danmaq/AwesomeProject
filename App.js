import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.bigblue}>Grace Braun</Text>
        <Text style={styles.red}>Enna Braun</Text>
        <Text style={[styles.red, styles.bigblue]}>Ark Wimmer</Text>
        <Text style={[styles.bigblue, styles.red]}>Gordon Bollmann</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);