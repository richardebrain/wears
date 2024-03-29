import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <input {...otherProps} className="form-input" onChange={handleChange} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;