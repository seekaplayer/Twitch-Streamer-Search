import React from "react";
import Input from "./Input";
import Button from "./Button";
const Form = ({ formAction, formMethod, updateUsername, submitUser }) => {
  return (
    <div className="row">
      <div className="col-12">
        <form action={formAction} method={formMethod}>
          <Input
            inputType="text"
            inputName="username"
            inputClass="form-control searchInput mt-2"
            inputPlaceholder="Search Twitch Username"
            inputOnChange={updateUsername}
          />
          <Button
            buttonType="submit"
            buttonText="Search User"
            buttonOnClick={submitUser}
            buttonClass="btn btn-twitch btn-lg mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
