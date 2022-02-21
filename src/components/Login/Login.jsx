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

const Login = () => {
  const [formError, setFormError] = useState(null);
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

  const login = (e) => {
    e.preventDefault();
    const user = allUsers.find(
      (user) => user.username === usernameInputState.value
    );

    if (user) {
      if (user.password === passwordInputState.value) {
        alert('ALL GOOD');
      } else {
        setFormError(true);
      }
    } else {
      setFormError(true);
    }
  };

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
          value={usernameInputState.value}
          onChangeFn={(e) => changeInputHandler(e, usernameInputDispatch)}
          type="text"
          label="Username"
          placeholder="johndoe_91"
        />
        <Input
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
