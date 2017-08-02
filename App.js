import React from 'react';
import { AppRegistry, Image } from 'react-native';

export default class HelloWorldApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://danmaq.com/wp-content/uploads/2012/11/em.jpg'
    };

    return (
      <Image source={pic} style={{width: 414, height: 736}}/>
  );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('netch-native', () => HelloWorldApp);