import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const userIsLoggedIn = useSelector((state) => state.userLogged.logged);
  if (!userIsLoggedIn) {
    return <Navigate to="/login" state={location} />;
  }
  return children;
};

export default RequireAuth;
