import './IndividualCamp.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import campMap from './Map.png';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CampComment from './../../components/CampComment/CampComment';
import Button from '../../components/Button/Button';

const IndividualCamp = () => {
  const location = useLocation();
  const [campground, setCampground] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const allCampgrounds = useSelector((state) => state.campgrounds);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addComment = () => {
    navigate(`new-comment`);
  };

  return (
    campground !== null && (
      <section className="individual-camp">
        <Header />
        <div className="individual-camp__container">
          <aside className="individual-camp__container__sidebar">
            <img src={campMap} alt="Camp location" />
          </aside>
          <main className="individual-camp__container__campground">
            <div className="individual-camp__container__campground__info">
              <img src={campground.image} alt="Campground" />
              <div className="individual-camp__container__campground__info__main">
                <h5 className="individual-camp__container__campground__info__main__name">
                  {campground.name}
                </h5>
                <h6 className="individual-camp__container__campground__info__main__price">
                  ${campground.price}/night
                </h6>
              </div>
              <p className="individual-camp__container__campground__info__description">
                {campground.longDescription}
              </p>
              <p className="individual-camp__container__campground__info__author">
                Submited by: {campground.createdBy}
              </p>
            </div>
            <div className="individual-camp__container__campground__reviews">
              <div className="individual-camp__container__campground__reviews__comments">
                {campground.comments.map((comment) => (
                  <CampComment
                    key={'id' + Math.random().toString(16).slice(2)}
                    author={comment.author}
                    content={comment.content}
                  />
                ))}
              </div>
              <Button
                clickFn={addComment}
                style={{ alignSelf: 'flex-end' }}
                textContent="Leave a Review"
                theme="black"
              />
            </div>
          </main>
        </div>
        <Footer />
      </section>
    )
  );
};

export default IndividualCamp;
