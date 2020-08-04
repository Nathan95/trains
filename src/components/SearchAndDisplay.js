import React from "react";

import { connect } from "react-redux";
import { fetchStations } from "../actions";
import { capitalise } from "../utils/utils";

import Items from "./Items";
import Spinner from "./Spinner";

import "../css/Search.css";

class SearchAndDisplay extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStations();
  }

  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  renderSearchResults() {
    const { search } = this.state;

    let stationsArray = this.props.stations || [];

    const filterStations = stationsArray.filter(item =>
      item.name.includes(search)
    );

    if (filterStations.length === 0) {
      return (
        <React.Fragment>
          Sorry but the entered station does not exist...
          <br />
          <button
            className="notFoundButton"
            onClick={() => {
              this.setState({ search: "" });
            }}
          >
            Retry
          </button>
        </React.Fragment>
      );
    }

    return filterStations
      .slice(0, 10)
      .map((item, index) => (
        <Items key={index} name={item.name} code={item.code} />
      ));
  }

  render() {
    const { search } = this.state;
    if (this.props.stations.length === 0) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <input
          autoComplete="off"
          onChange={this.handleChange}
          className="input"
          aria-label="search-input"
          placeholder="Search for a station..."
          id="searchField"
          value={capitalise(search)}
        />
        {search && <div className="suggest">{this.renderSearchResults()}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stations: Object.values(state.stations).flat()
  };
}

export default connect(mapStateToProps, { fetchStations })(SearchAndDisplay);
