import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import { loadCurrentUser } from '../actions/authActions';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.loadCurrentUser();
  }

  render() {
    return (
      <Text>Profile</Text>
    );
  }
}

const mapStateToProps = state => (
  {
    userData: state.AuthReducer.userData,
    errorMessage: state.AuthReducer.errorMessage,
  }
);

export default connect(mapStateToProps, { loadCurrentUser })(Profile);
