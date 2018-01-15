import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = 'E-Mail'
          placeholderTextColor = '#E3F2FD'
          keyboardType = 'email-address'
          underlineColorAndroid = '#E3F2FD'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'Senha'
          placeholderTextColor = '#E3F2FD'
          secureTextEntry
          underlineColorAndroid = '#E3F2FD'
        />

        <TouchableOpacity style = {styles.buttonContainer}>
          <Text style = {styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => {
            this.props.navigator.push({ id:'Register' });
          }}>
          <Text style = {styles.footerLinkText}>Cadastre-se</Text>
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
