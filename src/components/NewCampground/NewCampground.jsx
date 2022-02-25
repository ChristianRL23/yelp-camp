import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeInputHandler } from '../../utils/changeInputFunctions';
import {
  useCampgroundName,
  useCampgroundPrice,
  useCampgroundImage,
  useCampgroundShortDescription,
  useCampgroundLongDescription,
} from '../../hooks/newCampgroundHooks';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './NewCampground.scss';
import { verifyNewCampInputs } from './verifyNewCampInputs';
import { campgroundsActions } from '../../store/campgrounds';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewCampground = () => {
  const currentUser = useSelector((state) => state.userLogged.fullName);
  const navigate = useNavigate();
  const dispatchState = useDispatch();
  const [campgroundNameInputState, campgroundNameInputDispatch] =
    useCampgroundName();
  const [campgroundPriceInputState, campgroundPriceInputDispatch] =
    useCampgroundPrice();
  const [campgroundImageInputState, campgroundImageInputDispatch] =
    useCampgroundImage();
  const [
    campgroundShortDescriptionInputState,
    campgroundShortDescriptionInputDispatch,
  ] = useCampgroundShortDescription();
  const [
    campgroundLongDescriptionInputState,
    campgroundLongDescriptionInputDispatch,
  ] = useCampgroundLongDescription();

  const { valid: campgroundNameInputValid } = campgroundNameInputState;
  const { valid: campgroundImageInputValid } = campgroundImageInputState;
  const { valid: campgroundPriceInputValid } = campgroundPriceInputState;
  const { valid: campgroundShortDescriptionInputValid } =
    campgroundShortDescriptionInputState;
  const { valid: campgroundLongDescriptionInputValid } =
    campgroundLongDescriptionInputState;

  const createCampground = (e) => {
    e.preventDefault();
    verifyNewCampInputs(
      campgroundNameInputState,
      campgroundNameInputDispatch,
      campgroundPriceInputState,
      campgroundPriceInputDispatch,
      campgroundImageInputState,
      campgroundImageInputDispatch,
      campgroundShortDescriptionInputState,
      campgroundShortDescriptionInputDispatch,
      campgroundLongDescriptionInputState,
      campgroundLongDescriptionInputDispatch
    );
  };

  useEffect(() => {
    if (
      campgroundNameInputValid &&
      campgroundPriceInputValid &&
      campgroundImageInputValid &&
      campgroundShortDescriptionInputValid &&
      campgroundLongDescriptionInputValid
    ) {
      let campgroundId = 'id' + Math.random().toString(16).slice(2);
      dispatchState(
        campgroundsActions.createCampground({
          name: campgroundNameInputState.value,
          image: campgroundImageInputState.value,
          shortDescription: campgroundShortDescriptionInputState.value,
          longDescription: campgroundLongDescriptionInputState.value,
          id: campgroundId,
          createdBy: currentUser,
          price: Number(campgroundPriceInputState.value),
          comments: [],
        })
      );
      let newCampPath = campgroundNameInputState.value.toLowerCase();
      newCampPath = newCampPath.split(' ');
      newCampPath = newCampPath.join('-');
      navigate(`/campground/${newCampPath}/${campgroundId}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    campgroundNameInputValid,
    campgroundPriceInputValid,
    campgroundImageInputValid,
    campgroundShortDescriptionInputValid,
    campgroundLongDescriptionInputValid,
  ]);

  return (
    <form onSubmit={createCampground} className="new-campground">
      <h2 className="new-campground__title">Add New Campground</h2>
      <div className="new-campground__inputs">
        <Input
          onChangeFn={(e) => changeInputHandler(e, campgroundNameInputDispatch)}
          value={campgroundNameInputState.value}
          error={campgroundNameInputState.errorMsg}
          label="Campground Name"
          placeholder="Seven Sisters Waterfall"
        />
        <Input
          onChangeFn={(e) =>
            changeInputHandler(e, campgroundPriceInputDispatch)
          }
          value={campgroundPriceInputState.value}
          error={campgroundPriceInputState.errorMsg}
          label="Price"
          placeholder="$149"
          type="number"
        />
        <Input
          onChangeFn={(e) =>
            changeInputHandler(e, campgroundImageInputDispatch)
          }
          value={campgroundImageInputState.value}
          error={campgroundImageInputState.errorMsg}
          label="Image"
          placeholder="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Input
          onChangeFn={(e) =>
            changeInputHandler(e, campgroundShortDescriptionInputDispatch)
          }
          value={campgroundShortDescriptionInputState.value}
          error={campgroundShortDescriptionInputState.errorMsg}
          label="Short Description"
          placeholder="The Seven Sisters is the 39th tallest waterfall in Norway."
        />
        <Input
          onChangeFn={(e) =>
            changeInputHandler(e, campgroundLongDescriptionInputDispatch)
          }
          value={campgroundLongDescriptionInputState.value}
          error={campgroundLongDescriptionInputState.errorMsg}
          label="Long Description"
          type="textarea"
          placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
        />
      </div>
      <Button
        style={{ width: '100%' }}
        textContent="Add Campground"
        theme="black"
      />
    </form>
  );
};

export default NewCampground;
