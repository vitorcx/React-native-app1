import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class  Login extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            source = {require('../img/xhdpi/ic_launcher_foreground.png')}
          />
        </View>
        <View style = {styles.formContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1565C0",//material blue 800
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
