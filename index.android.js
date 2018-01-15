/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button
} from 'react-native';

var {height, width} = Dimensions.get('window');
var user = () => {
  return false
}

export default class app1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./bulb2.png')}
        />
        <Button
          onPress={user}
          title="Entrar"
          color="#000000"
        />
        <Button
          onPress={user}
          title="Cadastre-se"
          color="#000000"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: width,
    height: height-94,
    alignContent: 'center',
  },
});

AppRegistry.registerComponent('app1', () => app1);
