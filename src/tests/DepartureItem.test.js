import React from "react";
import { render } from "@testing-library/react";
import DepartureItem from "../components/DepartureItem";

const array = {
  departures: [
    {
      platform: "2",
      train_uid: "232942",
      status: "ON TIME",
      aimed_arrival_time: "12:02",
      aimed_departure_time: "11:02",
      expected_arrival_time: "14:02",
      expected_departure_time: "13:02",
      destination_name: "Basingstoke",
      operator_name: "South West Trains"
    }
  ]
};

const nullArray = {
  departures: [
    {
      platform: null,
      train_uid: null,
      status: null,
      aimed_arrival_time: null,
      aimed_departure_time: null,
      expected_arrival_time: null,
      expected_departure_time: null,
      destination_name: null,
      operator_name: null
    }
  ]
};

test("renders component with expected data", () => {
  const { getByText } = render(<DepartureItem departures={array.departures} />);
  const platform = getByText("2");
  const status = getByText("ON TIME");
  const aimed_arrival_time = getByText("12:02");
  const aimed_departure_time = getByText("11:02");
  const expected_arrival_time = getByText("14:02");
  const expected_departure_time = getByText("13:02");
  const destination_name = getByText("Basingstoke");
  const operator_name = getByText("South West Trains");

  expect(platform).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(aimed_arrival_time).toBeInTheDocument();
  expect(aimed_departure_time).toBeInTheDocument();
  expect(expected_arrival_time).toBeInTheDocument();
  expect(expected_departure_time).toBeInTheDocument();
  expect(destination_name).toBeInTheDocument();
  expect(operator_name).toBeInTheDocument();
});

test("renders component with all data unavailable", () => {
  const {} = render(<DepartureItem departures={nullArray.departures} />);
  let statusMessage = "Not yet available";

  expect(statusMessage).toHaveLength(17);
});
