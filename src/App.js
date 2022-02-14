import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LandingPage from './layouts/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<p>Home Page</p>} />
    </Routes>
  );
}

export default App;
