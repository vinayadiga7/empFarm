import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "../reducers/index";

const reducers = combineReducers({
  user: allReducers.userReducer,
  userRequestLoading: allReducers.userRequestLoadingReducer,
  loadPersonalFeed: allReducers.loadPersonalFeedReducer,
  images: allReducers.imagesReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
