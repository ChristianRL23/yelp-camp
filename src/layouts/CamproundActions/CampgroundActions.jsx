import './CampgroundActions.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import NewComment from '../../components/NewComment/NewComment';
import { useLocation } from 'react-router-dom';
import NewCampground from '../../components/NewCampground/NewCampground';

const CampgroundActions = () => {
  const [campgroundAction, setCampgroundAction] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/new-campground') {
      setCampgroundAction('NEW-CAMPGROUND');
    } else {
      setCampgroundAction('NEW-COMMENT');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={
        campgroundAction === 'NEW-COMMENT'
          ? 'campground-actions--comment'
          : 'campground-actions'
      }
    >
      <Header />
      {campgroundAction === 'NEW-CAMPGROUND' ? (
        <NewCampground />
      ) : (
        <NewComment />
      )}

      {campgroundAction === 'NEW-CAMPGROUND' ? (
        <Footer />
      ) : (
        <Footer
          style={{
            position: 'absolute',
            bottom: '0',
            marginTop: '0',
            marginBottom: '3rem',
          }}
        />
      )}
    </section>
  );
};

export default CampgroundActions;
