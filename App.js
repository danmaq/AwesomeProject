import React from 'react';
import { AppRegistry, FlatList, Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={[{key: "Enna"}, {key: "Grace"}, {key: "Arc"}, {key: "Bollmann"}]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);