import React from "react";
import { Link } from "react-router-dom";
import SkillListPage from "./SkillListPage";

export class SkillsPage extends React.Component {

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-10">
            <h4>Skills</h4>
          </div>
          <div className="col-md-2">
            <Link to="/create-skill" className="btn btn-info float-right">
              Add
            </Link>
          </div>
        </div>

        <SkillListPage />
      </>
    );
  }

  componentDidMount() {}
}

// export default SkillsPage;
