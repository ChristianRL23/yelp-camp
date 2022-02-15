import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Account from './layouts/Account/Account';
import HomePage from './layouts/HomePage/HomePage';
import LandingPage from './layouts/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Account />} />
      <Route path="/sign-up" element={<Account />} />
    </Routes>
  );
}

export default App;
