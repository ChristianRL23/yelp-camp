import { useNavigate } from 'react-router-dom';
import Button from './../../components/Button/Button';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__content">
        <div className="not-found__content__texts">
          <h2>404</h2>
          <h3>Not Found</h3>
          <p>The resource requested could not be found!</p>
        </div>
        <Button
          clickFn={() => navigate('/home')}
          theme="black"
          textContent="Go to the homepage"
        />
      </div>
    </section>
  );
};

export default NotFound;
