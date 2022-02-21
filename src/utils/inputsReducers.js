export const fullNameInputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        value: action.value,
        errorMsg: state.errorMsg,
        valid: state.valid,
      };
    case 'ERROR':
      return {
        value: state.value,
        errorMsg: action.errorMsg,
        valid: false,
      };
    case 'VALIDATE':
      return { value: state.value, errorMsg: '', valid: true };
    case 'CLEAN':
      return { value: '', errorMsg: '', valid: false };
    default:
      return { value: '', errorMsg: '', valid: false };
  }
};

export const fullNameInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const passwordInputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        value: action.value,
        errorMsg: state.errorMsg,
        valid: state.valid,
      };
    case 'ERROR':
      return {
        value: state.value,
        errorMsg: action.errorMsg,
        valid: false,
      };
    case 'VALIDATE':
      return { value: state.value, errorMsg: '', valid: true };
    case 'CLEAN':
      return { value: '', errorMsg: '', valid: false };
    default:
      return { value: '', errorMsg: '', valid: false };
  }
};

export const usernameInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const usernameInputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        value: action.value,
        errorMsg: state.errorMsg,
        valid: state.valid,
      };
    case 'ERROR':
      return {
        value: state.value,
        errorMsg: action.errorMsg,
        valid: false,
      };
    case 'VALIDATE':
      return { value: state.value, errorMsg: '', valid: true };
    case 'CLEAN':
      return { value: '', errorMsg: '', valid: false };
    default:
      return { value: '', errorMsg: '', valid: false };
  }
};

export const passwordInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};
