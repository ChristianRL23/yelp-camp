import { useReducer } from 'react';

///////////////// CAMPGROUND NAME INPUT /////////////////

const campgroundNameInputReducer = (state, action) => {
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

const campgroundNameInputInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const useCampgroundName = () => {
  const [campgroundNameInputState, campgroundNameInputDispatch] = useReducer(
    campgroundNameInputReducer,
    campgroundNameInputInitialState
  );

  return [campgroundNameInputState, campgroundNameInputDispatch];
};

///////////////// CAMPGROUND PRICE INPUT /////////////////

const campgroundPriceInputReducer = (state, action) => {
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

const campgroundPriceInputInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const useCampgroundPrice = () => {
  const [campgroundPriceInputState, campgroundPriceInputDispatch] = useReducer(
    campgroundPriceInputReducer,
    campgroundPriceInputInitialState
  );
  return [campgroundPriceInputState, campgroundPriceInputDispatch];
};

///////////////// CAMPGROUND IMAGE INPUT /////////////////

const campgroundImageInputReducer = (state, action) => {
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

const campgroundImageInputInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const useCampgroundImage = () => {
  const [campgroundImageInputState, campgroundImageInputDispatch] = useReducer(
    campgroundImageInputReducer,
    campgroundImageInputInitialState
  );
  return [campgroundImageInputState, campgroundImageInputDispatch];
};

///////////////// CAMPGROUND SHORT DESCRIPTION INPUT /////////////////

const campgroundShortDescriptionInputReducer = (state, action) => {
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

const campgroundShortDescriptionInputInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const useCampgroundShortDescription = () => {
  const [
    campgroundShortDescriptionInputState,
    campgroundShortDescriptionInputDispatch,
  ] = useReducer(
    campgroundShortDescriptionInputReducer,
    campgroundShortDescriptionInputInitialState
  );
  return [
    campgroundShortDescriptionInputState,
    campgroundShortDescriptionInputDispatch,
  ];
};

///////////////// CAMPGROUND LONG DESCRIPTION INPUT /////////////////

const campgroundLongDescriptionInputReducer = (state, action) => {
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

const campgroundLongDescriptionInputInitialState = {
  value: '',
  errorMsg: '',
  valid: false,
};

export const useCampgroundLongDescription = () => {
  const [
    campgroundLongDescriptionInputState,
    campgroundLongDescriptionInputDispatch,
  ] = useReducer(
    campgroundLongDescriptionInputReducer,
    campgroundLongDescriptionInputInitialState
  );
  return [
    campgroundLongDescriptionInputState,
    campgroundLongDescriptionInputDispatch,
  ];
};
