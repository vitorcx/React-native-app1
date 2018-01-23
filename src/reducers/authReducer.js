const INITIAL_STATE = {
  nome: '',
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  if (action.type === 'change_email') {
    return { ...state, email: action.payload };
  }
  if (action.type === 'change_password') {
    return { ...state, password: action.payload };
  }
  return state;
};
