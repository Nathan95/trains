import React from "react";
import PropTypes from "prop-types";
import "../css/Item.css";
import { Link } from "react-router-dom";

const Items = ({ name, code }) => {
  return (
    <div>
      <Link to={`/departures/${code}`}>
        <div className="result">{name}</div>
      </Link>
    </div>
  );
};

Items.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default Items;
