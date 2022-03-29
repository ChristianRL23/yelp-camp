import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <Header loggedStateHidden />
      <div className="not-found__content">
        <div className="not-found__content__texts">
          <h2>404</h2>
          <h3>Not Found</h3>
          <p>The resource requested could not be found!</p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NotFound;
