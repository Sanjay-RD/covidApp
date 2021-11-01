import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  countryDataReducer,
  countryListReducer,
  worldwideDataReducer,
} from "./reducers/covidReducers";

const reducer = combineReducers({
  countryList: countryListReducer,
  countryData: countryDataReducer,
});
const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
