import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { changeEmail, changePassword, registerUser } from '../../actions/authActions';


class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingAuth: false,
    };
  }

  handleOnPressRegister() {
    console.log(this.props.email);
    console.log(this.props.password);
    const { email, password } = this.props;
    this.props.registerUser({ email, password });
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
          onChangeText={(text) => { this.props.changeEmail(text); }}
          value={this.props.email}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor='#E3F2FD'
          underlineColorAndroid='#E3F2FD'
          secureTextEntry
          onChangeText={(text) => { this.props.changePassword(text); }}
          value={this.props.password}
        />

        <View style={styles.buttonAndError}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              this.handleOnPressRegister();
            }}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
        </View>
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
  },
  buttonText: {
    textAlign: 'center',
    color: '#E3F2FD',
  },
  errorMessage: {
    color: '#E3F2FD',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonAndError: {
    marginBottom: 100,
  }
});

const mapStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorMessage: state.AuthReducer.errorMessage
  }
);

export default connect(
  mapStateToProps,
  {
    changeEmail,
    changePassword,
    registerUser
  })(RegisterForm);

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
