import React from "react";

const Button = ({ buttonType, buttonOnClick, buttonText, buttonClass }) => {
  return (
    <button type={buttonType} onClick={buttonOnClick} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default Button;
