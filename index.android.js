import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const app1 = props => (
  <App />
);

AppRegistry.registerComponent('app1', () => app1);
