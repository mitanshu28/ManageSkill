import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  id,
  label,
  onChange,
  value,
  error,
  placeholder,
  maxLength
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>
        {label}
        <span className="text-red">*</span>
      </label>
      <div className="field">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          name={name}
          maxLength={maxLength}
          value={value}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  error: PropTypes.string,
  value: PropTypes.string
};

TextInput.defaultProps = { placeholder: "" };

export default TextInput;
