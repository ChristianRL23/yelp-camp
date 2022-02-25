import './Signup.scss';
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
} from './../../utils/inputsReducers';
import { usersActions } from './../../store/users';
import { userLoggedActions } from '../../store/userLogged';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { verifySignupInputs } from './verifySignupInputs';
import { changeInputHandler } from '../../utils/changeInputFunctions';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathFrom = location.state || '/home';
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
      navigate(pathFrom, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullNameInputValid, passwordInputValid, usernameInputValid]);

  const signup = (e) => {
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
      <form className="signup">
        <Input
          error={fullNameInputState.errorMsg}
          value={fullNameInputState.value}
          onChangeFn={(e) => changeInputHandler(e, fullNameInputDispatch)}
          type="text"
          label="Full Name"
          placeholder="Bill Prescott"
        />
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
          placeholder="Choose a Password"
        />
        <Button
          style={{ width: '100%' }}
          theme="black"
          clickFn={signup}
          textContent="Create an Account"
        />
      </form>
      <div className="signup__option">
        <p className="signup__option__question">Already a user?</p>
        <Link
          state={{ pathname: pathFrom }}
          to="/login"
          className="signup__option__action"
        >
          Sign in
        </Link>
      </div>
    </>
  );
};

export default Signup;
