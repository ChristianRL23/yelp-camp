import AccountInput from '../../components/AccountInput/AccountInput';
import './Account.scss';
import { useState, useEffect } from 'react';
import quoteAuthor from './User.svg';
import logo from './Logo.svg';
import Button from './../../components/Button/Button';
import { Link, useLocation } from 'react-router-dom';

const Account = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [usernameInputError, setUsernameInputError] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [passwordInputError, setPasswordInputError] = useState(null);
  const changeUsernameHandler = (e) => {
    setUsernameInputValue(e.target.value);
  };
  const changePasswornameHandler = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const currentPath = useLocation().pathname;

  useEffect(() => {
    setUsernameInputValue('');
    setPasswordInputValue('');
  }, [currentPath]);

  const accountAction = (e) => {
    e.preventDefault();
    if (currentPath === '/login') {
      alert('LOGIN');
    } else {
      if (usernameInputValue === '') {
        setUsernameInputError('The field cannot be empty.');
      } else if (usernameInputValue.length < 8) {
        setUsernameInputError('The username must be at least 8 characters.');
      } else {
        setUsernameInputError(null);
      }

      if (passwordInputValue === '') {
        setPasswordInputError('The field cannot be empty.');
      } else if (passwordInputValue.length < 6) {
        setPasswordInputError('The password must be at least 6 characters.');
      } else {
        setPasswordInputError(null);
      }
    }
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
              error={usernameInputError}
              value={usernameInputValue}
              onChangeFn={changeUsernameHandler}
              type="text"
              label="Username"
              placeholder="johndoe_91"
            />
            <AccountInput
              error={passwordInputError}
              value={passwordInputValue}
              onChangeFn={changePasswornameHandler}
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
