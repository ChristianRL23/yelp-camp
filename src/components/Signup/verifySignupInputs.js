export const verifySignupInputs = (
  fullNameInputState,
  fullNameInputDispatch,
  passwordInputState,
  passwordInputDispatch,
  usernameInputState,
  usernameInputDispatch,
  inputName,
  allUsers
) => {
  if (fullNameInputState.value === '') {
    fullNameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (inputName[1] === undefined || inputName[1] === '') {
    fullNameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The full name must be made up of first and last name.',
    });
  } else {
    fullNameInputDispatch({ type: 'VALIDATE' });
  }

  if (passwordInputState.value === '') {
    passwordInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (passwordInputState.value.length < 6) {
    passwordInputDispatch({
      type: 'ERROR',
      errorMsg: 'The password must be at least 6 characters.',
    });
  } else {
    passwordInputDispatch({ type: 'VALIDATE' });
  }

  if (usernameInputState.value === '') {
    usernameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (usernameInputState.value.length < 8) {
    usernameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The username must be at least 8 characters.',
    });
  } else if (
    allUsers.find((user) => user.username === usernameInputState.value.trim())
  ) {
    usernameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The username already exist.',
    });
  } else {
    usernameInputDispatch({ type: 'VALIDATE' });
  }
};
