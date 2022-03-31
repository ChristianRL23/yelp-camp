import './Button.scss';

const Button = ({ style, clickFn, theme, textContent }) => {
  return (
    <button style={style} onClick={clickFn} className={`button--${theme}`}>
      {textContent}
    </button>
  );
};

export default Button;
