import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../actions/manageSkills";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";
import SkillForm from "./SkillForm";

class ManageSkillPage extends React.Component {
  newSkill = {
    id: 0,
    skillName: "",
    totalExperienceInYears: "",
    proficiency: "",
    employeeId: 1
  };
  skillId = 0;

  constructor(props) {
    super(props);
    this.skillId = Number(props.match.params.id);

    this.state = {
      skill: this.newSkill,
      errors: {
        skillName: "",
        totalYearsOfExp: "",
        proficiency: ""
      }
    };
  }

  validateTotalYearsOfExp(value) {
    return /^\d{1,2}(\.\d{1,2})?$/.test(value);
  }

  handleChange = ({ target }) => {
    const skill = { ...this.state.skill, [target.name]: target.value };

    if (target.value) {
      const _errors = { ...this.state.errors, [target.name]: "" };
      this.setState({ errors: _errors });
    }
    this.setState({ skill: skill });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      this.props.actions.addSkill(this.state.skill);
    }
  };

  validateForm = () => {
    const _errors = {};
    if (!this.state.skill.skillName) _errors.skillName = "Skill is required";

    if (!this.state.skill.totalExperienceInYears)
      _errors.totalExperienceInYears = "Total years of experience is required";
    else if (
      this.state.skill.totalExperienceInYears &&
      !this.validateTotalYearsOfExp(this.state.skill.totalExperienceInYears)
    )
      _errors.totalExperienceInYears =
        "Total years of experience value is incorrect";

    if (!this.state.skill.proficiency)
      _errors.proficiency = "Proficiency is required";

    if (Object.keys(_errors).length > 0) {
      this.setState({ errors: _errors });
      return false;
    }
    return true;
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <SkillForm
            skillId={this.skillId}
            skill={this.state.skill}
            errors={this.state.errors}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            apiError={!this.props.apiError ? "" : this.props.apiError}
          />
        )}
      </>
    );
  }

  componentDidMount() {
    this.findEmployeeSkillById();
  }

  findEmployeeSkillById() {
    if (
      this.props.skills &&
      this.props.skills.length > 0 &&
      this.skillId &&
      this.skillId > 0
    ) {
      this.skill = this.props.skills.find(skill => {
        return skill.id === this.skillId;
      });
      this.setState({ skill: this.skill });
    } else if (
      (!this.props.skills ||
        (this.props.skills && this.props.skills.length === 0)) &&
      this.skillId &&
      this.skillId > 0
    ) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      if (!nextProps.apiError || nextProps.apiError.length === 0) {
        if (this.skillId && this.skillId > 0) {
          this.setState({ ...this.state, skill: this.newSkill });
          toast.success("Skill added successfully.");
        } else {
          toast.error("Error while adding skill.");
        }
      }
      // if (this.skillId && this.skillId > 0) this.findEmployeeSkillById();
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSkillPage);

function mapStateToProps(state) {
  return {
    isLoading: state.manageSkills.isLoading,
    apiError: state.manageSkills.error,
    skills: state.manageSkills.skills
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
