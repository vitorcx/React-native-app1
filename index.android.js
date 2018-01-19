import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import firebase from 'firebase';

import Login from './app/components/Login/Login';
import Register from './app/components/Register/Register';
import Profile from './app/components/Profile';
import HelpFeed from './app/components/HelpFeed';

export default class app1 extends Component {

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
      <Navigator
        initialRoute={{ id: 'Login' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'Login':
              return (<Login navigator={navigator} />);
            case 'Register':
              return (<Register navigator={navigator} />);
            case 'Profile':
              return (<Profile navigator={navigator} />);
            case 'HelpFeed':
              return (<HelpFeed navigator={navigator} />);
            default:
              return;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app1', () => app1);
