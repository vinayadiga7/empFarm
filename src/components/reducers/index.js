import {
  DELETE_USER,
  FETCH_USER,
  FETCH_USER_REQUEST_START,
  FETCH_USER_REQUEST_STOP,
} from "../actionCreaters/actionTypes";

const initialState = {
  user: {},
  userRequestLoading: false,
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

const userRequestLoadingReducer = (
  state = initialState.userRequestLoading,
  action
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST_START:
      return true;
    case FETCH_USER_REQUEST_STOP:
      return false;
    default:
      return state;
  }
};

export default { userReducer, userRequestLoadingReducer };
