import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import CampCard from '../../components/CampCard/CampCard';
import './HomePage.scss';
import searchIcon from './Search-Icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const campgrounds = useSelector((state) => state.campgrounds);

  const selectCampground = (e) => {
    const campgroundName = e.target.parentElement.children[1].textContent;
    const campgroundNameUrlParameter = campgroundName
      .toLowerCase()
      .split(' ')
      .join('-');
    navigate(`/campground/${campgroundNameUrlParameter}`);
  };

  const searchBarItems = campgrounds.map((campground, index) => {
    return {
      name: campground.name,
      id: index,
    };
  });

  const searchBarStyles = {
    letterSpacing: '0.3px',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '0',
    fontFamily: 'Archivo',
    color: '#595959',
    clearIconMargin: '4px 14px 0 0',
  };

  const selectResult = (result) => {
    const campgroundNameUrlParameter = result.name
      .toLowerCase()
      .split(' ')
      .join('-');
    navigate(`/campground/${campgroundNameUrlParameter}`);
  };

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
              <ReactSearchAutocomplete
                onSelect={selectResult}
                styling={searchBarStyles}
                items={searchBarItems}
                showIcon={false}
                placeholder="Search for camps"
              />
            </div>
          </form>
          <Link
            to="/new-campground"
            className="home-page__welcome__content__add-campground-link"
          >
            Or add your own campground
          </Link>
        </div>
      </article>
      <main className="home-page__campgrounds">
        {campgrounds.map((campground) => (
          <CampCard
            clickFn={selectCampground}
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
