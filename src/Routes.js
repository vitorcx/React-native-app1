import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile';

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
        hideNavBar='true'
      />
      <Scene
        key='profile'
        component={Profile}
        title='Perfil'
        hideNavBar='true'
      />
    </Stack>
  </Router>
);
