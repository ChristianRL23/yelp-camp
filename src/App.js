import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Account from './layouts/Account/Account';
import HomePage from './layouts/HomePage/HomePage';
import IndividualCamp from './layouts/IndividualCamp/IndividualCamp';
import LandingPage from './layouts/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Account />} />
      <Route path="/sign-up" element={<Account />} />
      <Route path="/individual-camp" element={<IndividualCamp />} />
    </Routes>
  );
}

export default App;
