import './Header.scss';
import Button from './../Button/Button';
import logo from './Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Logo" />
        <Link to="/home" className="header__left__home">
          Home
        </Link>
      </div>
      <div className="header__right">
        <Link className="header__right__login" to="/login">
          Login
        </Link>

        <Button textContent="Create an Account" theme="black" />
      </div>
    </header>
  );
};

export default Header;
