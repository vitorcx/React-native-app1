const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  if (action.type === 'change_email') {
    return { ...state, email: action.payload };
  }
  if (action.type === 'change_password') {
    return { ...state, password: action.payload };
  }
  if (action.type === 'change_name') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'register_user_fail') {
    return { ...state, errorMessage: action.payload };
  }
  if (action.type === 'register_user_success') {
    return { ...state, password: '' };
  }
  if (action.type === 'login_user_fail') {
    return { ...state, errorMessage: action.payload };
  }
  return state;
};
