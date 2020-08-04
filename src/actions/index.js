import { FETCH_STATION, FETCH_STATIONS } from "./types";

import { API } from "../api/api";
import axios from "axios";

export const fetchStations = () => async dispatch => {
  const response = await axios.get(API);

  dispatch({
    type: FETCH_STATIONS,
    payload: response.data
  });
};

export const fetchStation = value => async dispatch => {
  const response = await axios.get(`${API}/${value}`);

  dispatch({ type: FETCH_STATION, payload: response.data });
};
