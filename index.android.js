import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Login from './app/components/Login/Login';
import Register from './app/components/Register/Register';
import Profile from './app/components/Profile';
import HelpFeed from './app/components/HelpFeed';

export default class app1 extends Component {
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
