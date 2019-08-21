import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { PropTypes } from "prop-types";

const SkillForm = function({
  skillId,
  skill,
  errors,
  handleSubmit,
  handleChange,
  apiError
}) {
  return (
    <form noValidate onSubmit={handleSubmit}>
      {apiError && apiError.length > 0 && (
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-danger">{apiError}</div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-12">
          <h4>{skillId && skillId > 0 ? "Update" : "Create"} Skill</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TextInput
            name="skillName"
            id="skillName"
            placeholder="Enter skill name"
            label="Skill"
            error={errors.skillName}
            value={skill.skillName}
            onChange={handleChange}
            maxLength={50}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TextInput
            placeholder="Enter total experience"
            name="totalExperienceInYears"
            id="totalExperienceInYears"
            label="Total Experience (in years)"
            error={errors.totalExperienceInYears}
            value={skill.totalExperienceInYears}
            onChange={handleChange}
            maxLength={5}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <SelectInput
            name="proficiency"
            id="proficiency"
            label="Proficiency"
            error={errors.proficiency}
            value={skill.proficiency}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="float-right">
            <button className="btn btn-primary">Save</button>
            {"  "}
            <Link to="/" className="btn btn-info">
              Back
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

SkillForm.defaultProps = {
  apiError: "",
  errors: {},
  skillId: 0
};

SkillForm.propTypes = {
  skillId: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired
};

export default SkillForm;
