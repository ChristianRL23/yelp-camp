import Button from '../Button/Button';
import './CampCard.scss';

const CampCard = ({ image, name, description, clickFn }) => {
  const buttonStyles = {
    border: '1px solid #dfdfdf',
    width: '100%',
  };

  return (
    <div className="camp-card">
      <img className="camp-card__image" src={image} alt="Campground" />

      <h6 className="camp-card__name">{name}</h6>
      <p className="camp-card__description">{description}</p>
      <Button
        clickFn={clickFn}
        style={buttonStyles}
        textContent="View Campground"
        theme="white"
      />
    </div>
  );
};

export default CampCard;
