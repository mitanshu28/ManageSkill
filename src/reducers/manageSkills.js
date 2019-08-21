import actionTypes from "../actions/actionTypes";

const initialState = { skills: [], isLoading: false, error: null };
const manageSkills = (state, action) => {
  state = state || initialState;
  // console.log(state);
  switch (action.type) {
    case actionTypes.REQUEST_LOAD_SKILLS: {
      return { ...state, isLoading: true };
    }
    case actionTypes.RECEIVE_LOAD_SKILLS: {
      return {
        ...state,
        isLoading: false,
        errors: null,
        skills: action.skills
      };
    }
    case actionTypes.ERROR_ADD_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: action.apiError
      };
    }
    case actionTypes.REQUEST_ADD_SKILL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionTypes.RECEIVE_ADD_SKILL: {
      return {
        ...state,
        isLoading: false,
        skills: [...state.skills, action.skill]
      };
    }
    case actionTypes.RECEIVE_EDIT_SKILL: {
      debugger;
      return {
        ...state,
        isLoading: false,
        errors: null,
        skills: state.skills.map(skill =>
          skill.id === action.skill.id ? { ...action.skill } : skill
        )
      };
    }
    case actionTypes.ERROR_EDIT_SKILL: {
      return {
        ...state,
        isLoading: false,
        errors: action.apiError
      };
    }
    default:
      return state;
  }
};

export default manageSkills;
