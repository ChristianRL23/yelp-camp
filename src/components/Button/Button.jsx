import './Button.scss';

const Button = (props) => {
  return (
    <button onClick={props.clickFn} className="button">
      {props.textContent}
    </button>
  );
};

export default Button;
