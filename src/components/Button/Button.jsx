import './Button.scss';

const Button = (props) => {
  return <button className="button">{props.textContent}</button>;
};

export default Button;
