import './Footer.scss';
import logo from './Logo.svg';

const Footer = ({ style }) => {
  return (
    <footer style={style} className="footer">
      <img src={logo} alt="Logo" />
    </footer>
  );
};

export default Footer;
