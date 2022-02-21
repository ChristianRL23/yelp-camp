import './Login.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useReducer, useState, useEffect } from 'react';
import {
  usernameInputReducer,
  usernameInitialState,
  passwordInputReducer,
  passwordInitialState,
} from '../../utils/inputsReducers';
import { changeInputHandler } from '../../utils/changeInputFunctions';
import { userLoggedActions } from '../../store/userLogged';

const Login = () => {
  const [formError, setFormError] = useState(null);
  const [formSubmited, setFormSubmited] = useState(null);
  const stateDispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const [usernameInputState, usernameInputDispatch] = useReducer(
    usernameInputReducer,
    usernameInitialState
  );
  const [passwordInputState, passwordInputDispatch] = useReducer(
    passwordInputReducer,
    passwordInitialState
  );

  const { valid: passwordInputValid } = passwordInputState;
  const { valid: usernameInputValid } = usernameInputState;

  const login = (e) => {
    e.preventDefault();
    setFormSubmited(true);

    if (usernameInputState.value === '') {
      usernameInputDispatch({
        type: 'ERROR',
        errorMsg: 'The field cannot be empty.',
      });
    } else {
      usernameInputDispatch({ type: 'VALIDATE' });
    }

    if (passwordInputState.value === '') {
      passwordInputDispatch({
        type: 'ERROR',
        errorMsg: 'The field cannot be empty.',
      });
    } else {
      passwordInputDispatch({ type: 'VALIDATE' });
    }
  };

  useEffect(() => {
    setFormSubmited(null);
    if (passwordInputValid && usernameInputValid) {
      const user = allUsers.find(
        (user) => user.username === usernameInputState.value
      );

      if (user) {
        console.log(user);
        if (user.password === passwordInputState.value) {
          stateDispatch(
            userLoggedActions.login({
              fullName: user.fullName,
              username: user.username,
            })
          );
        } else {
          setFormError(true);
        }
      } else {
        setFormError(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordInputValid, usernameInputValid, formSubmited]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormError(null);
    }, 2300);
    return () => clearTimeout(timer);
  }, [formError]);

  return (
    <>
      <form className="login">
        <Input
          error={usernameInputState.errorMsg}
          value={usernameInputState.value}
          onChangeFn={(e) => changeInputHandler(e, usernameInputDispatch)}
          type="text"
          label="Username"
          placeholder="johndoe_91"
        />
        <Input
          error={passwordInputState.errorMsg}
          value={passwordInputState.value}
          onChangeFn={(e) => changeInputHandler(e, passwordInputDispatch)}
          label="Password"
          type="password"
          placeholder="Enter Your Password"
        />
        {formError && (
          <p className="login__error">
            The user does not exist or the password is incorrect.
          </p>
        )}
        <Button
          style={{ width: '100%' }}
          theme="black"
          clickFn={login}
          textContent="Login"
        />
      </form>
      <div className="login__option">
        <p className="login__option__question">Not a user yet?</p>
        <Link to="/login" className="login__option__action">
          Create an account
        </Link>
      </div>
    </>
  );
};

export default Login;
