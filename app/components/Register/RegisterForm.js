import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
    };
  }

  validPasswordConfirmation(
    password = this.state.passwordInput,
    confirmPassword = this.state.confirmPasswordInput) {
      if (password === confirmPassword) {
        return true;
      }
      return false;
  }

  registerUser(email = this.state.emailInput, password = this.state.passwordInput) {
    if (this.validPasswordConfirmation()) {
      firebase.auth.createUserWithEmailAndPassword(
        email,
        password
      ).catch(
        (error) => {
          console.log(error.code);
        });
    }
    console.log('pass confirm error');
  }

  handleOnPressRegister() {
    console.log(this.state.emailInput);
    console.log(this.state.passwordInput);
    console.log(this.state.confirmPasswordInput);
    firebase.auth().createUserWithEmailAndPassword(
      this.state.emailInput,
      this.state.passwordInput,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='E-Mail'
          placeholderTextColor='#E3F2FD'
          underlineColorAndroid='#E3F2FD'
          keyboardType='email-address'
          onChangeText={(text) => this.setState({ emailInput: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor='#E3F2FD'
          underlineColorAndroid='#E3F2FD'
          secureTextEntry
          onChangeText={(text) => this.setState({ passwordInput: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirmar Senha'
          placeholderTextColor='#E3F2FD'
          underlineColorAndroid='#E3F2FD'
          secureTextEntry
          onChangeText={(text) => this.setState({ confirmPasswordInput: text })}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.handleOnPressRegister();
          }}
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: '#1976D2',
    marginBottom: 10,
    color: '#E3F2FD',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#0D47A1',
    paddingVertical: 15,
    marginBottom: 100,

  },
  buttonText: {
    textAlign: 'center',
    color: '#E3F2FD',
  },
});
