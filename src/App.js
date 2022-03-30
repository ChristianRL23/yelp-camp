import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AvoidNewLog from './AvoidNewLog';

import Account from './layouts/Account/Account';
import CampgroundActions from './layouts/CamproundActions/CampgroundActions';
import HomePage from './layouts/HomePage/HomePage';
import IndividualCamp from './layouts/IndividualCamp/IndividualCamp';
import LandingPage from './layouts/LandingPage/LandingPage';
import NotFound from './layouts/NotFound/NotFound';
import RequireAuth from './RequireAuth';
import { campgroundsActions } from './store/campgrounds';
import { userLoggedActions } from './store/userLogged';
import { usersActions } from './store/users';

function App() {
  const campgroundsState = useSelector((state) => state.campgrounds);
  const usersState = useSelector((state) => state.users);
  const userLoggedState = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  //GET THE DATA FROM THE LOCAL STORAGE WHEN THE APP IS RE-RENDERED
  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('userLogged'));
    if (userLocalStorage.logged) {
      dispatch(
        userLoggedActions.login({
          fullName: userLocalStorage.fullName,
          username: userLocalStorage.username,
        })
      );
    }

    const usersLocalStorage = JSON.parse(localStorage.getItem('users'));
    dispatch(usersActions.saveUsers(usersLocalStorage));

    const campgroundsLocalStorage = JSON.parse(
      localStorage.getItem('campgrounds')
    );
    dispatch(campgroundsActions.saveCampgrounds(campgroundsLocalStorage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //CAMPGROUNDS
  useEffect(() => {
    localStorage.setItem('campgrounds', JSON.stringify(campgroundsState));
  }, [campgroundsState]);
  //USERS
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersState));
  }, [usersState]);
  //USER LOGGED
  useEffect(() => {
    localStorage.setItem('userLogged', JSON.stringify(userLoggedState));
  }, [userLoggedState]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <AvoidNewLog>
            <Account />
          </AvoidNewLog>
        }
      />
      <Route
        path="/sign-up"
        element={
          <AvoidNewLog>
            <Account />
          </AvoidNewLog>
        }
      />
      <Route
        path="/new-campground"
        element={
          <RequireAuth>
            <CampgroundActions />
          </RequireAuth>
        }
      />
      <Route
        path="/campground/:campgroundName/new-comment"
        element={
          <RequireAuth>
            <CampgroundActions />
          </RequireAuth>
        }
      />
      <Route path="/campground/:campgroundName" element={<IndividualCamp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
