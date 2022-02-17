import './IndividualCamp.scss';
import Header from './../../components/Header/Header';
import campMap from './Map.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IndividualCamp = () => {
  const [campground, setCampground] = useState(null);
  const params = useParams();
  const allCampgrounds = useSelector((state) => state.campgrounds);

  useEffect(() => {
    console.log(params);
    const campgroundNameLower = params.campgroundName.split('-');
    const campgroundNameArr = campgroundNameLower.map((word) => {
      const firstLetterUpper = word[0].toUpperCase();
      const wordWithoutFirstLetter = word.slice(1);
      return firstLetterUpper + wordWithoutFirstLetter;
    });
    const campgroundName = campgroundNameArr.join(' ');
    const currentCampground = allCampgrounds.find(
      (campground) => campground.name === campgroundName
    );
    setCampground(currentCampground);
    console.log('EFFECT');
  }, []);

  console.log('HELLO');

  return (
    campground !== null && (
      <section className="individual-camp">
        <Header />
        <div className="individual-camp__container">
          <aside className="individual-camp__container__sidebar">
            <img src={campMap} alt="Camp location" />
          </aside>
          <main className="individual-camp__contianer__campground">
            <div className="individual-camp__container__campground__info">
              <img src={campground.image} alt="Campground" />
              <div className="">
                <h5>{campground.name}</h5>
                <h6>{campground.price}/night</h6>
              </div>
              <p>{campground.longDescription}</p>
              <p>Submited by: {campground.createdBy}</p>
            </div>
            <div className="individual-camp__container__camprgound__comments"></div>
          </main>
        </div>
      </section>
    )
  );
};

export default IndividualCamp;
