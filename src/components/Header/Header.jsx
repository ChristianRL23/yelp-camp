import './Header.scss';
import Button from './../Button/Button';
import logo from './Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const navigate = useNavigate();
  const renderSignUpLayout = () => navigate('/sign-up');
  const userNoLoggedContent = (
    <>
      <Link className="header__right__action" to="/login">
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
      <Link className="header__right__action" to="/home">
        Logout
      </Link>
    </>
  );

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Logo" />
        <Link to="/home" className="header__left__home">
          Home
        </Link>
      </div>
      <div className="header__right">
        {!userLogged.logged ? userNoLoggedContent : userLoggedContent}
      </div>
    </header>
  );
};

export default Header;
