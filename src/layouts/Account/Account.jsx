import AccountInput from '../../components/AccountInput/AccountInput';
import './Account.scss';
import { useEffect, useReducer } from 'react';
import {
  fullNameInputReducer,
  fullNameInitialState,
  usernameInputReducer,
  usernameInitialState,
  passwordInputReducer,
  passwordInitialState,
} from './inputsReducers';
import quoteAuthor from './User.svg';
import logo from './Logo.svg';
import Button from './../../components/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from './../../store/users';

const Account = () => {
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

  const changeFullNameInputHandler = (e) => {
    fullNameInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const changePasswordInputHandler = (e) => {
    passwordInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const changeUsernameInputHandler = (e) => {
    usernameInputDispatch({ type: 'CHANGE', value: e.target.value });
  };

  const stateDispatch = useDispatch();

  const allUsers = useSelector((state) => state.users);
  const currentPath = useLocation().pathname;

  useEffect(() => {}, [currentPath]);

  useEffect(() => {
    if (fullNameInputValid && passwordInputValid && usernameInputValid) {
      alert('ALL GOOD');
    }
  }, [fullNameInputValid, passwordInputValid, usernameInputValid]);

  const accountAction = (e) => {
    e.preventDefault();
    const inputName = fullNameInputState.value.split(' ');

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
      allUsers.find((user) => user.username === usernameInputState.value)
    ) {
      usernameInputDispatch({
        type: 'ERROR',
        errorMsg: 'The username already exist.',
      });
    } else {
      usernameInputDispatch({ type: 'VALIDATE' });
    }

    /* if (currentPath === '/login') {
      alert('LOGIN');
    } else {
      stateDispatch(
        usersActions.createNewUser({
          username: usernameInputValue,
          password: passwordInputValue,
        })
      ); */
  };

  return (
    <section className="account">
      <div className="account__left">
        <header className="account__left__header">
          <img src={logo} alt="Logo" />
          <div className="account__left__header__back">
            <Link to="/home">&#8592; Back to campgrounds</Link>
          </div>
        </header>
        <div className="account__left__content">
          <h3 className="account__left__content__title">
            Start exploring camps from all around the world.
          </h3>
          <form className="account__left__content__form">
            <AccountInput
              error={fullNameInputState.errorMsg}
              value={fullNameInputState.value}
              onChangeFn={changeFullNameInputHandler}
              type="text"
              label="Full Name"
              placeholder="Bill Prescott"
            />
            <AccountInput
              error={usernameInputState.errorMsg}
              value={usernameInputState.value}
              onChangeFn={changeUsernameInputHandler}
              type="text"
              label="Username"
              placeholder="johndoe_91"
            />
            <AccountInput
              error={passwordInputState.errorMsg}
              value={passwordInputState.value}
              onChangeFn={changePasswordInputHandler}
              label="Password"
              type="password"
              placeholder={
                currentPath === '/login'
                  ? 'Enter Your Password'
                  : 'Choose a Password'
              }
            />
            <Button
              style={{ width: '100%' }}
              theme="black"
              clickFn={accountAction}
              textContent={
                currentPath === '/login' ? 'Login' : 'Create an Account'
              }
            />
          </form>
          <div className="account__left__content__option">
            <p className="account__left__content__option__question">
              {currentPath === '/login' ? 'Not a user yet?' : 'Already a user?'}
            </p>
            <Link
              to={currentPath === '/login' ? '/sign-up' : '/login'}
              className="account__left__content__option__action"
            >
              {currentPath === '/login' ? 'Create an Account' : 'Sign in'}
            </Link>
          </div>
        </div>
      </div>
      <div className="account__right">
        <div className="account__right__quote">
          <h4 className="account__right__quote__quote">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </h4>
          <div className="account__right__quote__author">
            <img
              className="account__right__quote__author__image"
              src={quoteAuthor}
              alt="Author"
            />
            <div className="account__right__quote__author__info">
              <h6 className="account__right__quote__author__info__name">
                May Andrews
              </h6>
              <p className="account__right__quote__author__info__role">
                Professional Hiker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
