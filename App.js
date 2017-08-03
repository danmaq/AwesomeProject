import React from 'react';
import { AppRegistry, View, Button, StyleSheet, Alert } from 'react-native';

export default class HelloWorldApp extends React.Component {
  static _onPressButton() {
    Alert.alert("May I help you?");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button onPress={HelloWorldApp._onPressButton} title="HIT ME." />
        </View>
        <View style={styles.container}>
          <Button onPress={HelloWorldApp._onPressButton} title="HIT ME." color="#841584" />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={HelloWorldApp._onPressButton} title="This looks great!" />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={HelloWorldApp._onPressButton} title="HIT ME." color="#841584" />
        </View>
      </View>
    );
  }
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: { margin: 20 },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);