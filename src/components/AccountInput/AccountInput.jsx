import './AccountInput.scss';

const AccountInput = (props) => {
  return (
    <div className="account-input">
      <label className="account-input__label" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        className="account-input__input"
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default AccountInput;
