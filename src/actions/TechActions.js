import {
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
} from "./types";

//get all tech
export const getTech = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("/techs");
    const responseData = await response.json();
    dispatch({
      type: GET_TECHS,
      payload: responseData,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "error in tech get",
    });
  }
};

//add tech
export const addTech = (tech) => async (dispatch) => {
  console.log("tech", tech);

  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "error in tech add",
    });
  }
};
//delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "error in tech add",
    });
  }
};

//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
