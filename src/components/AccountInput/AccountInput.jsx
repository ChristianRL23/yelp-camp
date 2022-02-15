import './AccountInput.scss';

const AccountInput = (props) => {
  return (
    <div className="account-input">
      <div className="account-input__label-container">
        <label htmlFor={props.label}>{props.label}</label>
        {props.error && <p>{props.error}</p>}
      </div>
      <input
        value={props.value}
        onChange={props.onChangeFn}
        className="account-input__input"
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default AccountInput;
