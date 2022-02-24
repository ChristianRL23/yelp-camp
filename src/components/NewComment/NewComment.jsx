import './NewComment.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  commentInitialState,
  commentInputReducer,
} from '../../utils/inputsReducers';
import { campgroundsActions } from '../../store/campgrounds';
import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changeInputHandler } from '../../utils/changeInputFunctions';

const NewComment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const stateDispatch = useDispatch();
  const currentLoggedUser = useSelector((state) => state.userLogged.fullName);

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
      const pathnameArr = location.pathname.split('/');
      navigate(`/campground/${pathnameArr[2]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentInputValid]);

  return (
    <form className="new-comment">
      <h2 className="new-comment__title">Add New Comment</h2>
      <div className="new-comment__inputs">
        <Input
          error={commentInputState.errorMsg}
          value={commentInputState.value}
          onChangeFn={(e) => changeInputHandler(e, commentInputDispatch)}
          label="Description"
          type="textarea"
          placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
        />
      </div>
      <Button
        clickFn={addComment}
        style={{ width: '100%' }}
        textContent="Post Comment"
        theme="black"
      />
    </form>
  );
};

export default NewComment;
