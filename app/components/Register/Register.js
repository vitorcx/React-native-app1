import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import RegisterForm from './RegisterForm'

export default class  Login extends Component {
  render() {
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            style = {styles.logoContainer}
            source = {require('../../img/xhdpi/ic_launcher_foreground.png')}
          />
        </View>
        <View style = {styles.formContainer}>
          <RegisterForm />
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
