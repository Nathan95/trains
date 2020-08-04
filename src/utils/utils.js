import React from "react";
import "../css/statusColours.css";

export const formatDate = date => {
  let newDate = new Date(Date.parse(date));
  let format = new Intl.DateTimeFormat("default").format(newDate);
  return format;
};

export const status = status => {
  switch (status) {
    case "LATE":
      return <div className="late">{status}</div>;
    case "ON TIME":
      return <div className="ontime">{status}</div>;
    case "EARLY":
      return <div className="early">{status}</div>;
    case "STARTS HERE":
      return <div className="startshere">{status}</div>;
    case "BUS":
      return <div className="bus">{status}</div>;
    case "OFF ROUTE":
      return <div className="offroute">{status}</div>;
    case "CANCELLED":
      return <div className="cancelled">{status}</div>;

    default:
      return status || <span>"N/A"</span>;
  }
};

export const capitalise = val => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
