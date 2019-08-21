import * as actionTypes from "./actionTypes";

const API_URL = "https://localhost:44331/api/";

export const actionCreators = {
  loadSkills: () => async (dispatch, getState) => {
    dispatch(actionTypes.requestLoadSkills());

    const url = API_URL + `ManageSkills`;
    const response = await fetch(url);

    dispatch(actionTypes.receiveLoadSkills(await response.json()));
  },
  addSkill: skill => async (dispatch, getState) => {
    dispatch(actionTypes.requestAddSkill());
    const url = API_URL + `ManageSkills`;

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(skill)
    };

    const response = await fetch(url, settings);
    // console.log(response);
    if (response.status === 200)
      dispatch(actionTypes.receiveAddSkill(await response.json()));
    else dispatch(actionTypes.receiveAddSkillError(await response.json()));
  },
  editSkill: skill => async (dispatch, getState) => {
    dispatch(actionTypes.requestAddSkill());
    const url = API_URL + `ManageSkills`;

    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(skill)
    };

    const response = await fetch(url, settings);
    // console.log(response);
    if (response.status === 200)
      dispatch(actionTypes.receiveEditSkill(await response.json()));
    else dispatch(actionTypes.receiveEditSkillError(await response.json()));
  },
  getEmployeeSkillById: employeeSkillId => async (dispatch, getState) => {
    const url =
      API_URL + `ManageSkills/GetEmployeeSkillById/${employeeSkillId}`;

    const response = await fetch(url);

    if (response.status === 200)
      dispatch(actionTypes.receiveEmployeeSkillById(await response.json()));
    //else dispatch(actionTypes.receiveAddSkillError(await response.json()));
  }
};
