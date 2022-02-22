import './CampgroundActions.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import {
  commentInitialState,
  commentInputReducer,
} from '../../utils/inputsReducers';
import { changeInputHandler } from '../../utils/changeInputFunctions';
import { useDispatch } from 'react-redux';
import { campgroundsActions } from '../../store/campgrounds';
import { useSelector } from 'react-redux';

const CampgroundActions = () => {
  const [campgroundAction, setCampgroundAction] = useState('');
  const params = useParams();
  const stateDispatch = useDispatch();
  const currentLoggedUser = useSelector((state) => state.userLogged.fullName);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === '/new-campground') {
      setCampgroundAction('NEW-CAMPGROUND');
    } else {
      setCampgroundAction('NEW-COMMENT');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //NEW COMMENT

  const [commentInputState, commentInputDispatch] = useReducer(
    commentInputReducer,
    commentInitialState
  );

  const { valid: commentInputValid } = commentInputState;

  const addComment = (e) => {
    e.preventDefault();
    if (commentInputState.value.trim() === '') {
      commentInputDispatch({
        type: 'ERROR',
        errorMsg: 'The field cannot be empty.',
      });
    } else if (commentInputState.value.length > 100) {
      commentInputDispatch({
        type: 'ERROR',
        errorMsg: 'Only a maximum of 100 characters is allowed.',
      });
    } else {
      commentInputDispatch({ type: 'VALIDATE' });
    }
  };

  const newCommentContent = (
    <Input
      error={commentInputState.errorMsg}
      value={commentInputState}
      onChangeFn={(e) => changeInputHandler(e, commentInputDispatch)}
      label="Description"
      type="textarea"
      placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
    />
  );

  useEffect(() => {
    if (commentInputValid) {
      let campground = params.campgroundName.split('-');
      campground = campground.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      campground = campground.join(' ');
      stateDispatch(
        campgroundsActions.addComment({
          author: currentLoggedUser,
          content: commentInputState.value,
          campgroundName: campground,
        })
      );
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentInputValid]);

  //NEW COMMENT

  const newCampgroundContent = (
    <>
      <Input label="Campground Name" placeholder="Seven Sisters Waterfall" />
      <Input label="Price" placeholder="$149" type="number" />
      <Input
        label="Image"
        placeholder="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Input
        label="Short Description"
        placeholder="The Seven Sisters is the 39th tallest waterfall in Norway."
      />
      <Input
        label="Long Description"
        type="textarea"
        placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
      />
    </>
  );

  return (
    <section
      className={
        campgroundAction === 'NEW-COMMENT'
          ? 'campground-actions--comment'
          : 'campground-actions'
      }
    >
      <Header />
      <form onSubmit={addComment} className="campground-actions__form">
        <h2 className="campground-actions__form__title">
          Add New{' '}
          {campgroundAction === 'NEW-CAMPGROUND' ? 'Campground' : 'Comment'}
        </h2>
        <div className="campground-actions__form__inputs">
          {campgroundAction === 'NEW-CAMPGROUND'
            ? newCampgroundContent
            : newCommentContent}
        </div>
        <Button
          style={{ width: '100%' }}
          textContent={
            campgroundAction === 'NEW-CAMPGROUND'
              ? 'Add Campground'
              : 'Post Comment'
          }
          theme="black"
        />
      </form>
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
