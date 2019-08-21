const actionTypes = {
  REQUEST_ADD_SKILL: "REQUEST_ADD_SKILL",
  RECEIVE_ADD_SKILL: "RECEIVE_ADD_SKILL",
  ERROR_ADD_SKILL: "ERROR_ADD_SKILL",

  RECEIVE_EMPLOYEE_SKILL_BY_ID: "RECEIVE_EMPLOYEE_SKILL_BY_ID",
  REQUEST_EDIT_SKILL: "REQUEST_EDIT_SKILL",
  RECEIVE_EDIT_SKILL: "RECEIVE_EDIT_SKILL",
  ERROR_EDIT_SKILL: "ERROR_EDIT_SKILL",

  REQUEST_DELETE_SKILL: "REQUEST_DELETE_SKILL",
  RECEIVE_DELETE_SKILL: "RECEIVE_DELETE_SKILL",
  ERROR_DELETE_SKILL: "ERROR_DELETE_SKILL",

  REQUEST_LOAD_SKILLS: "REQUEST_LOAD_SKILLS",
  RECEIVE_LOAD_SKILLS: "RECEIVE_LOAD_SKILLS",
  ERROR_LOAD_SKILLS: "ERROR_LOAD_SKILLS"
};
export default actionTypes;

export function requestLoadSkills() {
  return {
    type: actionTypes.REQUEST_LOAD_SKILLS
  };
}

export function receiveLoadSkills(skills) {
  return {
    type: actionTypes.RECEIVE_LOAD_SKILLS,
    skills,
    receivedAt: Date.now()
  };
}

export function requestAddSkill() {
  return {
    type: actionTypes.REQUEST_ADD_SKILL
  };
}

export function receiveAddSkill(skill) {
  return {
    type: actionTypes.RECEIVE_ADD_SKILL,
    skill,
    receivedAt: Date.now()
  };
}

export function receiveAddSkillError(apiError) {
  return {
    type: actionTypes.ERROR_ADD_SKILL,
    apiError,
    receivedAt: Date.now()
  };
}
export function requestEditSkill(skill) {
  return {
    type: actionTypes.REQUEST_EDIT_SKILL,
    skill
  };
}

export function receiveEditSkillError(apiError) {
  return {
    type: actionTypes.ERROR_EDIT_SKILL,
    apiError,
    receivedAt: Date.now()
  };
}

export function receiveEmployeeSkillById(skill) {
  return {
    type: actionTypes.RECEIVE_EMPLOYEE_SKILL_BY_ID,
    skill,
    receivedAt: Date.now()
  };
}
export function receiveEditSkill(skill) {
  return {
    type: actionTypes.RECEIVE_EDIT_SKILL
  };
}

export function requestDeleteSkill(skill) {
  return {
    type: actionTypes.REQUEST_DELETE_SKILL,
    skill
  };
}

export function receiveDeleteSkill() {
  return {
    type: actionTypes.RECEIVE_DELETE_SKILL
  };
}
