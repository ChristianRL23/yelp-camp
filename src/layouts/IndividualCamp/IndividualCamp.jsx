import './IndividualCamp.scss';
import Header from './../../components/Header/Header';
import campMap from './Map.png';

const IndividualCamp = () => {
  return (
    <section className="individual-camp">
      <Header />
      <div className="individual-camp__container">
        <aside className="individual-camp__container__sidebar">
          <img src={campMap} alt="Camp location" />
        </aside>
        <main></main>
      </div>
    </section>
  );
};

export default IndividualCamp;
