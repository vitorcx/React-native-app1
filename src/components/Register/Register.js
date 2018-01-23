import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import RegisterForm from './RegisterForm';


export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.titleLabel}>Cadastre-se</Text>
        </View>
        <View style={styles.formContainer}>
          <RegisterForm />
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
  titleLabel: {
    fontSize: 30,
    color: '#E3F2FD',
    fontWeight: 'bold',
  },
  backNavButtonContainer: {
    width: 64,
  }
});
