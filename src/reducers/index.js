import { combineReducers } from "redux";
import stations from "./stations";
import station from "./station";

const rootReducer = combineReducers({
  stations,
  station
});

export default rootReducer;
