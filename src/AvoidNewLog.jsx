import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AvoidNewLog = ({ children }) => {
  const userIsLoggedIn = useSelector((state) => state.userLogged.logged);
  if (userIsLoggedIn) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default AvoidNewLog;
