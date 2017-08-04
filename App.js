import React from 'react';
import { AppRegistry, Image, Text, ScrollView } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me</Text>
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/wp-content/uploads/2012/11/em_POP.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/wp-content/uploads/2012/11/em_POP.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
        <Text style={{fontSize:96}}>Scroll me</Text>
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/wp-content/uploads/2012/11/em_POP.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/wp-content/uploads/2012/11/em_POP.png"}} style={{width: 256, height: 256}} />
        <Image source={{uri: "https://danmaq.com/enna.png"}} style={{width: 256, height: 256}} />
      </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);