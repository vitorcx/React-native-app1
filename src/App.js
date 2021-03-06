import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers/index.js';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default class App extends Component {

  constructor(props) {
     super(props);
     console.ignoredYellowBox = [
         'Setting a timer'
     ];
 }

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

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
