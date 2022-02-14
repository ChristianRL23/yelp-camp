import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './layouts/HomePage/HomePage';
import LandingPage from './layouts/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
