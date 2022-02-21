import Signup from './../../components/Signup/Signup';
import './Account.scss';
import quoteAuthor from './User.svg';
import logo from './Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../components/Login/Login';

const Account = () => {
  const currentPath = useLocation().pathname;

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
          {currentPath === '/sign-up' ? <Signup /> : <Login />}
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
