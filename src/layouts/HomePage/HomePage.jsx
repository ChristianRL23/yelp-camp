import Button from '../../components/Button/Button';
import './HomePage.scss';
import searchIcon from './Search-Icon.svg';

const HomePage = () => {
  return (
    <section className="home-page">
      <article className="home-page__welcome">
        <div className="home-page__welcome__content">
          <h3 className="home-page__welcome__content__title">
            Welcome to YelpCamp!
          </h3>
          <p className="home-page__welcome__content__paragraph">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </p>
          <form className="home-page__welcome__content__form">
            <div className="home-page__welcome__content__form__input-container">
              <img
                className="home-page__welcome__content__form__input-container__icon"
                src={searchIcon}
                alt="Magnifying glass"
              />
              <input
                placeholder="Search for camps"
                className="home-page__welcome__content__form__input-container__input"
                type="text"
              />
            </div>
            <Button textContent="Search" />
          </form>
          <a
            className="home-page__welcome__content__add-campground-link"
            href="#"
          >
            Or add your own campground
          </a>
        </div>
      </article>
    </section>
  );
};

export default HomePage;
