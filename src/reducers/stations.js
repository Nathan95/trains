import { FETCH_STATIONS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATIONS:
      return action.payload;

    default:
      return state;
  }
};
