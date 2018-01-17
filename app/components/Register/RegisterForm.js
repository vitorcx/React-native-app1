import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class  Login extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = 'Nome de Usuário'
          placeholderTextColor = '#E3F2FD'
          underlineColorAndroid = '#E3F2FD'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'E-Mail'
          placeholderTextColor = '#E3F2FD'
          underlineColorAndroid = '#E3F2FD'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'Senha'
          placeholderTextColor = '#E3F2FD'
          underlineColorAndroid = '#E3F2FD'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'Confirmar Senha'
          placeholderTextColor = '#E3F2FD'
          underlineColorAndroid = '#E3F2FD'
        />

        <TouchableOpacity style = {styles.buttonContainer}>
          <Text style = {styles.buttonText}>Cadastrar</Text>
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
