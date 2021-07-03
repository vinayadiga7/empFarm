import {
  DELETE_USER,
  FETCH_PERSONALFEED,
  FETCH_USER,
  FETCH_USER_REQUEST_START,
  FETCH_USER_REQUEST_STOP,
  SET_IMAGES,
} from "../actionCreaters/actionTypes";

const initialState = {
  user: null,
  userRequestLoading: false,
  loadPersonalFeed: false,
  images: [],
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

const loadPersonalFeedReducer = (
  state = initialState.loadPersonalFeed,
  action
) => {
  switch (action.type) {
    case FETCH_PERSONALFEED:
      return true;
    default:
      return state;
  }
};
const imagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return action.payload;
    default:
      return state;
  }
};

export default {
  userReducer,
  userRequestLoadingReducer,
  loadPersonalFeedReducer,
  imagesReducer,
};
