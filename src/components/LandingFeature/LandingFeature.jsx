import './LandingFeature.scss';
import checkmark from './Checkmark.svg';

const LandingFeature = (props) => {
  return (
    <div className="landing-feature">
      <img
        className="landing-feature__icon"
        src={checkmark}
        alt="Check green"
      />
      <p className="landing-feature__text">{props.text}</p>
    </div>
  );
};

export default LandingFeature;
