import Button from '../../components/Button/Button';
import LandingFeature from '../../components/LandingFeature/LandingFeature';
import './LandingPage.scss';
import logo from './Logo.svg';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-page__left">
        <header className="landing-page__left__header">
          <img src={logo} alt="Company logo" />
        </header>
        <div className="landing-page__left__welcome-text">
          <h2 className="landing-page__left__welcome-text__title">
            Explore the best camps on the Earth.
          </h2>
          <p className="landing-page__left__welcome-text__paragraph">
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </p>
          <div className="landing-page__left__welcome-text__features">
            <LandingFeature text="Add your own camp suggestions." />
            <LandingFeature text="Leave reviews and experiences." />
            <LandingFeature text="See locations for all camps." />
          </div>
          <Button textContent="View Campgrounds" />
        </div>
      </div>
      <div className="landing-page__right" />
    </section>
  );
};

export default LandingPage;
