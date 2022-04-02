export const verifyNewCampInputs = (
  campgroundNameInputState,
  campgroundNameInputDispatch,
  campgroundPriceInputState,
  campgroundPriceInputDispatch,
  campgroundImageInputState,
  campgroundImageInputDispatch,
  campgroundShortDescriptionInputState,
  campgroundShortDescriptionInputDispatch,
  campgroundLongDescriptionInputState,
  campgroundLongDescriptionInputDispatch,
  allCampgrounds
) => {
  const urlExpression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(urlExpression);

  //// NAME INPUT ////
  if (campgroundNameInputState.value === '') {
    campgroundNameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (
    allCampgrounds.find(
      (camp) => camp.name === campgroundNameInputState.value.trim()
    )
  ) {
    campgroundNameInputDispatch({
      type: 'ERROR',
      errorMsg: 'The campground already exist.',
    });
  } else if (campgroundNameInputState.value.length > 25) {
    campgroundNameInputDispatch({
      type: 'ERROR',
      errorMsg: 'Only a maximum of 25 characters is allowed.',
    });
  } else {
    campgroundNameInputDispatch({ type: 'VALIDATE' });
  }
  //// PRICE INPUT ////
  if (campgroundPriceInputState.value === '') {
    campgroundPriceInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (campgroundPriceInputState.value.length > 6) {
    campgroundPriceInputDispatch({
      type: 'ERROR',
      errorMsg: 'Must be a maximum of 6 digits.',
    });
  } else if (campgroundPriceInputState.value <= 0) {
    campgroundPriceInputDispatch({
      type: 'ERROR',
      errorMsg: 'Must not be less than 0.',
    });
  } else {
    campgroundPriceInputDispatch({ type: 'VALIDATE' });
  }
  //// IMAGE INPUT ////
  if (campgroundImageInputState.value === '') {
    campgroundImageInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (!campgroundImageInputState.value.match(regex)) {
    campgroundImageInputDispatch({
      type: 'ERROR',
      errorMsg: 'Must be a URL of an image on internet.',
    });
  } else {
    campgroundImageInputDispatch({ type: 'VALIDATE' });
  }
  //// SHORT DESCRIPTION INPUT ////
  if (campgroundShortDescriptionInputState.value === '') {
    campgroundShortDescriptionInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (campgroundShortDescriptionInputState.value.length > 70) {
    campgroundShortDescriptionInputDispatch({
      type: 'ERROR',
      errorMsg: 'Only a maximum of 70 characters is allowed.',
    });
  } else {
    campgroundShortDescriptionInputDispatch({ type: 'VALIDATE' });
  }
  //// LONG DESCRIPTION INPUT ////
  if (campgroundLongDescriptionInputState.value === '') {
    campgroundLongDescriptionInputDispatch({
      type: 'ERROR',
      errorMsg: 'The field cannot be empty.',
    });
  } else if (campgroundLongDescriptionInputState.value.length > 220) {
    campgroundLongDescriptionInputDispatch({
      type: 'ERROR',
      errorMsg: 'Only a maximum of 220 characters is allowed.',
    });
  } else {
    campgroundLongDescriptionInputDispatch({ type: 'VALIDATE' });
  }
};
