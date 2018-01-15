import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import LoginForm from './LoginForm';

export default class  Login extends Component {
  render() {
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            source = {require('../../img/xhdpi/ic_launcher_foreground.png')}
          />
        </View>
        <View style = {styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
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
