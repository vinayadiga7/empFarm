import {
  FETCH_USER,
  FETCH_USERDATA,
  FETCH_USER_REQUEST_START,
  FETCH_USER_REQUEST_STOP,
  DELETE_USER,
} from "./actionTypes";
import { loginUser } from "../helpers/loginUser";

export const fetchUser = (props) => async (dispatch) => {
  dispatch({
    type: FETCH_USER_REQUEST_START,
  });
  console.log(props);
  const result = await new Promise((resolve, reject) => {
    loginUser({ ...props, resolve, reject });
  });

  console.log(result);
  const action = {
    type: FETCH_USER,
    payload: result,
  };
  dispatch(action);
  dispatch({
    type: FETCH_USER_REQUEST_STOP,
  });
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
