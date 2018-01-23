import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/Login/Login';
import Register from './components/Register/Register';

export default props => (
  <Router sceneStyle={{ padding: 0 }}>
    <Stack key='root'>
      <Scene
        key='login'
        component={Login}
        title='Login'
        initial
        hideNavBar='true'
      />
      <Scene
        key='register'
        component={Register}
        title='Cadastro'
        sceneConfig={Navigator.SceneConfigs.FloatFromRight}
        hideNavBar='true'
      />
    </Stack>
  </Router>
);