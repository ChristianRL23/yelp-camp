import { slide as Burger, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import HamburgerIcon from './Hamburger.svg';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import Button from './../Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedActions } from '../../store/userLogged';
import { useState } from 'react';

const Header = ({ loggedStateHidden }) => {
  const [sidebarLoggedIsOpen, setSidebarLoggedIsOpen] = useState(false);
  const [sidebarNoLoggedIsOpen, setSidebarNoLoggedIsOpen] = useState(false);
  const location = useLocation();
  const stateDispatch = useDispatch();
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.userLogged);

  const logoutUser = () => {
    stateDispatch(userLoggedActions.logout());
    setSidebarLoggedIsOpen(false);
  };

  const renderSignUpLayout = () =>
    navigate('/sign-up', { state: location.pathname });

  const renderLogInLayout = () =>
    navigate('/login', { state: { pathname: location.pathname } });

  const largePhone = useMediaQuery({
    query: '(max-width: 590px)',
  });

  const userNoLoggedContent = (
    <>
      <Link state={location} className="header__right__action" to="/login">
        Login
      </Link>
      <Button
        clickFn={renderSignUpLayout}
        textContent="Create an Account"
        theme="black"
      />
    </>
  );
  const userLoggedContent = (
    <>
      <h6 className="header__right__username">{userLogged.username}</h6>
      <p onClick={logoutUser} className="header__right__action">
        Logout
      </p>
    </>
  );

  return (
    <header className="header">
      <Burger
        width={180}
        className="burger-menu--no-logged"
        isOpen={sidebarNoLoggedIsOpen}
        onClose={() => setSidebarNoLoggedIsOpen(false)}
      >
        <>
          <Item onClick={renderLogInLayout} itemKey="login" text="Login" />
          <Item
            onClick={renderSignUpLayout}
            itemKey="create"
            text="Create an Account"
          />
        </>
      </Burger>

      <Burger
        width={180}
        className="burger-menu--logged"
        isOpen={sidebarLoggedIsOpen}
        onClose={() => setSidebarLoggedIsOpen(false)}
      >
        <>
          <Item itemKey="user" text={userLogged.username} />
          <Item onClick={logoutUser} itemKey="logout" text="Logout" />
        </>
      </Burger>

      <div className="header__left">
        <img
          onClick={() => navigate('/home')}
          src="/images/Logo.svg"
          alt="Logo"
        />
        {!largePhone && (
          <Link to="/home" className="header__left__home">
            Home
          </Link>
        )}
      </div>
      {!loggedStateHidden &&
        (!largePhone ? (
          <div className="header__right">
            {!userLogged.logged ? userNoLoggedContent : userLoggedContent}
          </div>
        ) : (
          <img
            onClick={
              userLogged.logged
                ? () => setSidebarLoggedIsOpen(true)
                : () => setSidebarNoLoggedIsOpen(true)
            }
            src={HamburgerIcon}
            alt="Hamburger icon"
          />
        ))}
    </header>
  );
};

export default Header;
