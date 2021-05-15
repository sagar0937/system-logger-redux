import {
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
} from "../actions/types";

const intialState = {
  loading: false,
  error: null,
  techs: null,
};
export const techReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default techReducer;
