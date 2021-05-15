import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

//get logs
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("/logs");
    const responseData = await response.json();
    dispatch({
      type: GET_LOGS,
      payload: responseData,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//add log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });
    const data = await response.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//delete
export const deleteLog = (id) => async (dispatch) => {
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//update log --update
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });
    const data = await response.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGS_ERROR,
      payload: "error ",
    });
  }
};
//search log
export const searchLog = (text) => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch(`/logs/?q=${text}`);
    const responseData = await response.json();
    // dispatch({
    //   type: SEARCH_LOGS,
    //   payload: responseData,
    // });
    dispatch({
      type: SEARCH_LOGS,
      payload: responseData,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: "error ",
    });
  }
};
//set current log--Update log
export const setCurrentLog = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
//clear current log--Update log
export const clearCurrentLog = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
