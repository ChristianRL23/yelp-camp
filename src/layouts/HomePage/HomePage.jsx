import Button from '../../components/Button/Button';
import CampCard from '../../components/CampCard/CampCard';
import './HomePage.scss';
import searchIcon from './Search-Icon.svg';
import mountUlap from './Mount-Ulap.png';

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
            <Button textContent="Search" theme="black" />
          </form>
          <a
            className="home-page__welcome__content__add-campground-link"
            href="#"
          >
            Or add your own campground
          </a>
        </div>
      </article>
      <main className="home-page__campgrounds">
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
        <CampCard
          image={mountUlap}
          name="Test Camp"
          description="This is a beutiful card only for example purposes. You can put the info of your camps here."
        />
      </main>
    </section>
  );
};

export default HomePage;
