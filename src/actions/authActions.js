import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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

export const registerUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => registerUserSuccess(dispatch))
      .catch(error => registerUserFail(error, dispatch));
  };
};

const registerUserSuccess = (dispatch) => {
  dispatch(
    {
      type: 'register_user_success',
    }
  );
  Actions.profile();
};

const registerUserFail = (error, dispatch) => {
  dispatch(
    {
      type: 'register_user_fail',
      payload: error.message,
    }
  );
};
