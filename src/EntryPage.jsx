import { Navigate } from 'react-router-dom';

const EntryPage = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem('userLogged'));
  let path;
  if (userLocalStorage.logged) {
    path = '/home';
  } else {
    path = '/welcome';
  }

  return <Navigate replace to={path} />;
};

export default EntryPage;
