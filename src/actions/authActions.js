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
