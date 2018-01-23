import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const changeEmail = (text) => {
  console.log(text);
    return {
      type: 'change_email',
      payload: text,
    };
};

export const changePassword = (text) => {
  console.log(text);
  return {
    type: 'change_password',
    payload: text,
  };
};

export const changeName = (text) => {
  console.log(text);
  return {
    type: 'change_name',
    payload: text,
  };
};

export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const emailb64 = b64.encode(email);
        firebase.database().ref(`/users/${emailb64}`)
          .push({ name })
          .then(value => registerUserSuccess(dispatch));
      })
      .catch(error => registerUserFail(error, dispatch));
  };
};

const registerUserSuccess = (dispatch) => {
  dispatch(
    {
      type: 'register_user_success',
    }
  );
  Actions.login();
};

const registerUserFail = (error, dispatch) => {
  dispatch(
    {
      type: 'register_user_fail',
      payload: error.message,
    }
  );
};

export const loginUser = ({ email, password }) => {
  console.log(email);
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => loginUserSuccess(dispatch))
    .catch((error) => loginUserFail(error, dispatch));
  };
};

const loginUserSuccess = (dispatch) => {
  dispatch(
    {
      type: 'login_user_success',
    }
  );
  Actions.profile();
};

const loginUserFail = (error, dispatch) => {
  dispatch(
    {
      type: 'login_user_fail',
      payload: error.message,
    }
  );
};
