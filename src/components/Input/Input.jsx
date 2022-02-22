import './Input.scss';

const Input = (props) => {
  return (
    <div className="input">
      <div className="input__label-container">
        <label htmlFor={props.label}>{props.label}</label>
        {props.error && <p>{props.error}</p>}
      </div>
      {props.type === 'textarea' ? (
        <textarea
          onChange={props.onChangeFn}
          placeholder={props.placeholder}
          className="input__textarea"
        ></textarea>
      ) : (
        <input
          value={props.value}
          onChange={props.onChangeFn}
          className="input__input"
          id={props.label}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};

export default Input;
