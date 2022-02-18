import './CampgroundActions.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const CampgroundActions = () => {
  return (
    <section className="campground-actions">
      <Header />
      <form className="campground-actions__form">
        <h2 className="campground-actions__form__title">Add New Campground</h2>
        <div className="campground-actions__form__inputs">
          <Input
            label="Campground Name"
            placeholder="Seven Sisters Waterfall"
          />
          <Input label="Price" placeholder="$149" type="number" />
          <Input
            label="Image"
            placeholder="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <Input
            label="Short Description"
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway."
          />
          <Input
            label="Long Description"
            type="textarea"
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
          />
        </div>
        <Button
          style={{ width: '100%' }}
          textContent="Add Campground"
          theme="black"
        />
      </form>
      <Footer />
    </section>
  );
};

export default CampgroundActions;
