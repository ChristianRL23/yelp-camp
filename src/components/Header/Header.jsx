import './Header.scss';
import Button from './../Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedActions } from '../../store/userLogged';

const Header = ({ loggedStateHidden }) => {
  const location = useLocation();
  const stateDispatch = useDispatch();
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.userLogged);

  const logoutUser = () => {
    stateDispatch(userLoggedActions.logout());
  };

  const renderSignUpLayout = () =>
    navigate('/sign-up', { state: location.pathname });

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
      <div className="header__left">
        <img src="/images/Logo.svg" alt="Logo" />
        <Link to="/home" className="header__left__home">
          Home
        </Link>
      </div>
      {!loggedStateHidden && (
        <div className="header__right">
          {!userLogged.logged ? userNoLoggedContent : userLoggedContent}
        </div>
      )}
    </header>
  );
};

export default Header;
