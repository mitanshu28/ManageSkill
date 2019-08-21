import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import { actionCreators } from "../../actions/manageSkills";
import Spinner from "../common/Spinner";

class SkillListPage extends React.Component {
  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <div className="row">
        <div className="col-md-12">
          <table
            className="table table-bordered table-responsive-lg"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Skill</th>
                <th>Total Years of Experience</th>
                <th>Proficiency</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            {this.props.skills && this.props.skills.length > 0 && (
              <tbody>
                {this.props.skills.map(skill => {
                  return (
                    <tr key={skill.id}>
                      <td>{skill.employeeName}</td>
                      <td>{skill.skillName}</td>
                      <td>{skill.totalExperienceInYears}</td>
                      <td>{skill.proficiency}</td>
                      <td>
                        <Link
                          to={"/create-skill/" + skill.id}
                          className="btn btn-info"
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </Link>
                        {"  "}
                        <button className="btn btn-danger">
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
            {(!this.props.skills || this.props.skills.length === 0) && (
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center">
                    <b>No skill found.</b>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.actions.loadSkills();
  }
  componentWillReceiveProps(nextProps) {
    //This will only be required when we want to use the component state
    // if (nextProps.skills && nextProps.skills.length > 0)
    //   this.setState({ skills: nextProps.skills });
  }
}

export default connect(
  // (state, ownProps) => {
  //   return { skills: state.manageSkills.skills };
  // },
  mapStateToProps,
  mapDispatchToProps
  //dispatch => bindActionCreators(actionCreators, dispatch)
)(SkillListPage);

function mapStateToProps(state, ownProps) {
  return {
    skills: state.manageSkills.skills,
    isLoading: state.manageSkills.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
