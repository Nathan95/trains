import { FETCH_STATION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATION:
      return action.payload;

    default:
      return state;
  }
};
