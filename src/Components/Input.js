import React from "react";

const Input = ({
  inputType,
  inputName,
  inputClass,
  inputPlaceholder,
  inputOnChange
}) => {
  return (
    <input
      type={inputType}
      name={inputName}
      className={inputClass}
      placeholder={inputPlaceholder}
      onChange={event => inputOnChange(event.target.value)}
      autoComplete="off"
    />
  );
};

export default Input;
