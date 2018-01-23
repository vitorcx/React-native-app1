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
import { connect } from 'react-redux';

import { changeEmail, changePassword } from '../../actions/authActions';


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

const mapStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
  }
);

export default connect(mapStateToProps, { changeEmail, changePassword })(RegisterForm);

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
