import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from 'react-native';
import RegisterForm from './RegisterForm';

const backNavIcon = require('../../img/backNavIcon.png');

export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TouchableOpacity
          style={styles.backNavButtonContainer}
          onPress={() => {
            this.props.navigator.pop();
          }}
        >
          <Image
            style={styles.backNavButton}
            source={backNavIcon}
          />
        </TouchableOpacity>
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
  }
});
