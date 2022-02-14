import './Button.scss';

const Button = (props) => {
  return (
    <button
      style={props.style}
      onClick={props.clickFn}
      className={`button--${props.theme}`}
    >
      {props.textContent}
    </button>
  );
};

export default Button;
