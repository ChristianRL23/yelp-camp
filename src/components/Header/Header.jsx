import './Header.scss';
import Button from './../Button/Button';
import logo from './Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Logo" />
        <a className="header__left__home" href="#">
          Home
        </a>
      </div>
      <div className="header__right">
        <a className="header__right__login" href="#">
          Login
        </a>
        <Button textContent="Create an Account" theme="black" />
      </div>
    </header>
  );
};

export default Header;
