import { useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './../../components/Button/Button';
import Input from './../../components/Input/Input';
import {
  fullNameInputReducer,
  fullNameInitialState,
  usernameInputReducer,
  usernameInitialState,
  passwordInputReducer,
  passwordInitialState,
} from './signupInputsReducers';
import { usersActions } from './../../store/users';
import { userLoggedActions } from '../../store/userLogged';
import { Link } from 'react-router-dom';
import { verifySignupInputs } from './verifySignupInputs';

const Signup = () => {
  const stateDispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  const [fullNameInputState, fullNameInputDispatch] = useReducer(
    fullNameInputReducer,
    fullNameInitialState
  );

  const [usernameInputState, usernameInputDispatch] = useReducer(
    usernameInputReducer,
    usernameInitialState
  );

  const [passwordInputState, passwordInputDispatch] = useReducer(
    passwordInputReducer,
    passwordInitialState
  );

  const { valid: fullNameInputValid } = fullNameInputState;
  const { valid: passwordInputValid } = passwordInputState;
  const { valid: usernameInputValid } = usernameInputState;

  useEffect(() => {
    if (fullNameInputValid && passwordInputValid && usernameInputValid) {
      stateDispatch(
        usersActions.createNewUser({
          username: usernameInputState.value,
          password: passwordInputState.value,
          fullName: fullNameInputState.value,
        })
      );
      fullNameInputDispatch({ type: 'CLEAN' });
      passwordInputDispatch({ type: 'CLEAN' });
      usernameInputDispatch({ type: 'CLEAN' });

      stateDispatch(
        userLoggedActions.login({
          username: usernameInputState.value,
          fullName: fullNameInputState.value,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullNameInputValid, passwordInputValid, usernameInputValid]);

  const changeFullNameInputHandler = (e) => {
    fullNameInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const changePasswordInputHandler = (e) => {
    passwordInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const changeUsernameInputHandler = (e) => {
    usernameInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const accountAction = (e) => {
    e.preventDefault();
    const inputName = fullNameInputState.value.split(' ');
    verifySignupInputs(
      fullNameInputState,
      fullNameInputDispatch,
      passwordInputState,
      passwordInputDispatch,
      usernameInputState,
      usernameInputDispatch,
      inputName,
      allUsers
    );
  };

  return (
    <>
      <form className="account__left__content__form">
        <Input
          error={fullNameInputState.errorMsg}
          value={fullNameInputState.value}
          onChangeFn={changeFullNameInputHandler}
          type="text"
          label="Full Name"
          placeholder="Bill Prescott"
        />
        <Input
          error={usernameInputState.errorMsg}
          value={usernameInputState.value}
          onChangeFn={changeUsernameInputHandler}
          type="text"
          label="Username"
          placeholder="johndoe_91"
        />
        <Input
          error={passwordInputState.errorMsg}
          value={passwordInputState.value}
          onChangeFn={changePasswordInputHandler}
          label="Password"
          type="password"
          placeholder="Choose a Password"
        />
        <Button
          style={{ width: '100%' }}
          theme="black"
          clickFn={accountAction}
          textContent="Create an Account"
        />
      </form>
      <div className="account__left__content__option">
        <p className="account__left__content__option__question">
          Already a user?
        </p>
        <Link to="/login" className="account__left__content__option__action">
          Sign in
        </Link>
      </div>
    </>
  );
};

export default Signup;
