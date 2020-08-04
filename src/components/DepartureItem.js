import React from "react";
import PropTypes from "prop-types";
import { status } from "../utils/utils";

import "../css/DepartureItem.css";

const DepartureItem = ({ date, stationName, departures }) => {
  let statusMessage = "Not yet available";

  if (departures.length === 0) {
    return (
      <div className="departureItemContainer">
        <div className="wrapper">
          <a href="/" className="goBackButton">
            &#8592; Back to search
          </a>
          <div> Sorry! There are no more departures available...</div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="departureItemContainer">
          <div className="wrapper">
            <a href="/" className="goBackButton">
              &#8592; Back to search
            </a>
            <h2>{stationName}</h2>
            <span className="date">{date}</span>
            {departures.map(depart => (
              <ul key={depart.train_uid}>
                <li>
                  <span className="title">Status: </span>
                  <strong> {status(depart.status)}</strong>
                </li>
                <li>
                  <span className="title">Platform: </span>
                  <strong>
                    {depart.platform ? depart.platform : statusMessage}
                  </strong>
                </li>
                <li>
                  <span className="title">Arrival Time: </span>
                  {depart.aimed_arrival_time
                    ? depart.aimed_arrival_time
                    : statusMessage}
                </li>
                <li>
                  <span className="title"> Departure Time: </span>
                  {depart.aimed_departure_time
                    ? depart.aimed_departure_time
                    : statusMessage}
                </li>
                <li>
                  <span className="title"> Expected Arrival Time: </span>
                  {depart.expected_arrival_time
                    ? depart.expected_arrival_time
                    : statusMessage}
                </li>
                <li>
                  <span className="title"> Expected Departure Time: </span>
                  {depart.expected_departure_time
                    ? depart.expected_departure_time
                    : statusMessage}
                </li>
                <li>
                  <span className="title"> Destination: </span>
                  {depart.destination_name
                    ? depart.destination_name
                    : statusMessage}
                </li>
                <li>
                  <span className="title"> Operator: </span>
                  {depart.operator_name ? depart.operator_name : statusMessage}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

DepartureItem.propTypes = {
  date: PropTypes.string,
  stationName: PropTypes.string,
  departures: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string,
      train_uid: PropTypes.string,
      status: PropTypes.string,
      aimed_arrival_time: PropTypes.string,
      aimed_departure_time: PropTypes.string,
      expected_arrival_time: PropTypes.string,
      destination_name: PropTypes.string,
      operator_name: PropTypes.string
    }).isRequired
  )
};

export default DepartureItem;
