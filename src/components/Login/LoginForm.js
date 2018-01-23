import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { changeEmail, changePassword } from '../../actions/authActions';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnPressLogin() {
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
          keyboardType='email-address'
          underlineColorAndroid='#E3F2FD'
          onChangeText={(text) => { this.props.changeEmail(text); }}
          value={this.props.email}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor='#E3F2FD'
          secureTextEntry
          underlineColorAndroid='#E3F2FD'
          onChangeText={(text) => { this.props.changePassword(text); }}
          value={this.props.password}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.handleOnPressLogin();
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.register();
          }}
        >
          <Text style={styles.footerLinkText}>Cadastre-se</Text>
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

  },
  buttonText: {
    textAlign: 'center',
    color: '#E3F2FD',
  },
  footerLinkText: {
    textAlign: 'center',
    color: '#E3F2FD',
    marginTop: 5,
  }
});

const mapStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
  }
);

export default connect(mapStateToProps, { changeEmail, changePassword })(LoginForm);
