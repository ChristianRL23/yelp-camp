import AccountInput from '../../components/AccountInput/AccountInput';
import './Account.scss';
import quoteAuthor from './User.svg';
import Button from './../../components/Button/Button';

const Account = () => {
  return (
    <section className="account">
      <div className="account__left">
        <div className="account__left__content">
          <h3 className="account__left__content__title">
            Start exploring camps from all around the world.
          </h3>
          <form className="account__left__content__form">
            <AccountInput label="Username" placeholder="johndoe_91" />
            <AccountInput label="Password" placeholder="Enter Your Password" />
            <Button
              style={{ width: '100%' }}
              theme="black"
              textContent="Login"
            />
          </form>
          <div className="account__left__content__option">
            <p className="account__left__content__option__question">
              Not a user yet?
            </p>
            <a className="account__left__content__option__action" href="#">
              Create an account
            </a>
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
