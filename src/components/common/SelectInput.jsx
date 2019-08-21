import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({ name, id, label, onChange, value, error }) => {
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
        <select
          className="form-control"
          id={id}
          onChange={onChange}
          name={name}
          value={value}
        >
          <option value="">Select proficiency</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string
};

export default SelectInput;
