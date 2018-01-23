import React, { Component } from 'react';
import firebase from 'firebase';
import Routes from './Routes';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBCVjYyeU_wLijynjmzKdqvVF76eOse5I',
      authDomain: 'appmonitorias-6c133.firebaseapp.com',
      databaseURL: 'https://appmonitorias-6c133.firebaseio.com',
      projectId: 'appmonitorias-6c133',
      storageBucket: 'appmonitorias-6c133.appspot.com',
      messagingSenderId: '446122747507'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Routes />
    );
  }
}
