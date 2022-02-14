import './Account.scss';
import quoteAuthor from './User.svg';

const Account = () => {
  return (
    <section className="account">
      <div className="account__left">
        <h3>Start</h3>
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
