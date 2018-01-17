import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

const bulbIcon = require('../../img/xhdpi/ic_launcher_foreground.png');

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={bulbIcon}
          />
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigator={this.props.navigator} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1565C0', //material blue 800
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
