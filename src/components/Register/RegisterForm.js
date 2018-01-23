import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      loadingAuth: false,
    };
  }

  alerta(title, message) {
    Alert.alert(
      'Preencha os campos corretamente',
      message,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  registerUser(email = this.state.emailInput, password = this.state.passwordInput) {
    let errorMessage;
    this.setState({ loadingAuth: true });
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.setState({ loadingAuth: false });
    }).catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'O endereço de email é inválido';
            break;
          case 'auth/weak-password':
            errorMessage = 'A senha precisa possuir ao menos 6 caracteres';
            break;
          case 'auth/email-already-in-use':
            errorMessage = 'Este email já está sendo usado';
            break;
          case 'auth/operation-not-allowed':
            errorMessage = 'Operação inválida';
            break;
          default:
            console.log(error.code);
            return errorMessage;
        }
        return errorMessage;
    });
  }

  handleOnPressRegister() {
    console.log(this.state.emailInput);
    console.log(this.state.passwordInput);
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

/*
if (error.code === 'auth/invalid-email') {
  errorMessage = 'O endereço de email é inválido';
} else if (error.code === 'auth/weak-password') {
  errorMessage = 'A senha precisa possuir ao menos 6 caracteres';
} else if (error.code === 'auth/email-already-in-use') {
  errorMessage = 'Este email já está sendo usado';
} else if (error.code === 'auth/operation-not-allowed') {
  errorMessage = 'Operação inválida';
}
*/
