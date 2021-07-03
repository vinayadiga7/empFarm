import {
  FETCH_USER,
  FETCH_USER_REQUEST_START,
  FETCH_USER_REQUEST_STOP,
  DELETE_USER,
  FETCH_PERSONALFEED,
  SET_IMAGES,
} from "./actionTypes";
import { loginUser } from "../helpers/loginUser";

export const fetchUser = (props) => async (dispatch) => {
  dispatch({
    type: FETCH_USER_REQUEST_START,
  });
  // console.log(props);
  const result = await loginUser(props);

  console.log(result);
  const action = {
    type: FETCH_USER,
    payload: result,
  };
  dispatch(action);
  dispatch({
    type: FETCH_USER_REQUEST_STOP,
  });
  dispatch(fetchPersonalFeed());
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const fetchPersonalFeed = () => {
  return {
    type: FETCH_PERSONALFEED,
  };
};

export const setImages = (props) => {
  return {
    type: SET_IMAGES,
    payload: props,
  };
};
