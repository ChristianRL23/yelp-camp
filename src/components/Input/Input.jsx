import './Input.scss';

const Input = (props) => {
  return (
    <div className="input">
      <div className="input__label-container">
        <label htmlFor={props.label}>{props.label}</label>
        {props.error && <p>{props.error}</p>}
      </div>
      <input
        value={props.value}
        onChange={props.onChangeFn}
        className="input__input"
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
