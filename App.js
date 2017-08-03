import React from 'react';
import { AppRegistry, Alert, Button, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Text, View, Platform } from 'react-native';

export default class HelloWorldApp extends React.Component {
  static _onPressButton() {
    Alert.alert("May I help you?");
  }
  static _onLongPressButton() {
    Alert.alert("Long Tapped.");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={HelloWorldApp._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={HelloWorldApp._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={HelloWorldApp._onPressButton}
                                 background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={HelloWorldApp._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={HelloWorldApp._onPressButton}
                            onLongPress={HelloWorldApp._onLongPressButton}
                            underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Available Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);