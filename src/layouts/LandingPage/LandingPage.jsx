import Button from '../../components/Button/Button';
import './LandingPage.scss';
import airbnbLogo from './Airbnb.svg';
import bookingLogo from './Booking.svg';
import plumGuideLogo from './Plum-Guide.svg';
import { useNavigate } from 'react-router-dom';
import checkmark from './Checkmark.svg';

const LandingFeature = ({ text }) => {
  return (
    <div className="landing-feature">
      <img
        className="landing-feature__icon"
        src={checkmark}
        alt="Check green"
      />
      <p className="landing-feature__text">{text}</p>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/home');
  };

  return (
    <section className="landing-page">
      <div className="landing-page__left">
        <header className="landing-page__left__header">
          <img src="/images/Logo.svg" alt="Company logo" />
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
          <Button
            clickFn={goToHomePage}
            textContent="View Campgrounds"
            theme="black"
          />
          <div className="landing-page__left__welcome-text__partners">
            <h6 className="landing-page__left__welcome-text__partners__title">
              Partnered with:
            </h6>
            <div className="landing-page__left__welcome-text__partners__logos">
              <img src={airbnbLogo} alt="Partner logo" />
              <img src={bookingLogo} alt="Partner logo" />
              <img src={plumGuideLogo} alt="Partner logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page__right" />
    </section>
  );
};

export default LandingPage;
