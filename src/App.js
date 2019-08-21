import React from "react";
import "./App.css";
import { SkillsPage } from "./components/skills/SkillsPage";
import { Route, Switch } from "react-router-dom";
import ManageSkillPage from "./components/skills/ManageSkillPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Switch>
            <Route exact path="/" component={SkillsPage} />
            <Route exact path="/create-skill" component={ManageSkillPage} />
            <Route exact path="/create-skill/:id" component={ManageSkillPage} />
          </Switch>
        </div>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </>
  );
}

export default App;
