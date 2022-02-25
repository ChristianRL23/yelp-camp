import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Account from './layouts/Account/Account';
import CampgroundActions from './layouts/CamproundActions/CampgroundActions';
import HomePage from './layouts/HomePage/HomePage';
import IndividualCamp from './layouts/IndividualCamp/IndividualCamp';
import LandingPage from './layouts/LandingPage/LandingPage';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Account />} />
      <Route path="/sign-up" element={<Account />} />
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
      <Route
        path="/campground/:campgroundName/:id"
        element={<IndividualCamp />}
      />
    </Routes>
  );
}

export default App;
