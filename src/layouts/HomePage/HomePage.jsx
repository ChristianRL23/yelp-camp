import Button from '../../components/Button/Button';
import CampCard from '../../components/CampCard/CampCard';
import './HomePage.scss';
import searchIcon from './Search-Icon.svg';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const campgrounds = useSelector((state) => state.campgrounds);

  return (
    <section className="home-page">
      <Header />
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
        {campgrounds.map((campground) => (
          <CampCard
            name={campground.name}
            image={campground.image}
            description={campground.shortDescription}
            key={campground.id}
          />
        ))}
      </main>
      <Footer />
    </section>
  );
};

export default HomePage;
