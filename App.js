import React from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';

export default class HelloWorldApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput style={{ padding: 10, fontSize: 36 }}
                   placeholder="Type here to 🐹."
                   onChangeText={t => this.setState({text: t})} />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);