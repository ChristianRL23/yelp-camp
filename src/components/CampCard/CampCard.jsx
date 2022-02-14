import Button from '../Button/Button';
import './CampCard.scss';

const CampCard = (props) => {
  const buttonStyles = {
    border: '1px solid #dfdfdf',
    width: '100%',
  };

  return (
    <div className="camp-card">
      <img className="camp-card__image" src={props.image} alt="Campground" />
      <h6 className="camp-card__name">{props.name}</h6>
      <p className="camp-card__description">{props.description}</p>
      <Button
        style={buttonStyles}
        textContent="View Campground"
        theme="white"
      />
    </div>
  );
};

export default CampCard;
