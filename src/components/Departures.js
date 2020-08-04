import React from "react";
import { fetchStation } from "../actions";
import { connect } from "react-redux";
import { formatDate } from "../utils/utils";

import DepartureItem from "./DepartureItem";
import Spinner from "./Spinner";

import "../css/Departures.css";

class Departures extends React.Component {
  componentDidMount() {
    const path = window.location.pathname.split("/").pop();
    this.props.fetchStation(path);
  }

  render() {
    const { station } = this.props;
    if (this.props.station.length === 0) {
      return <Spinner />;
    }

    return (
      <React.Fragment>
        <h1>Live Departures</h1>
        {station.map(data => (
          <DepartureItem
            key={data.date}
            date={formatDate(data.date)}
            stationName={data.station_name}
            departures={data.departures.map(depart => depart)}
          />
        ))}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    station: Object.values(state.station).flat()
  };
}

export default connect(mapStateToProps, { fetchStation })(Departures);
