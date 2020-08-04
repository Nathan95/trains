import React from "react";
import Items from "../components/Items";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders component with expected data", () => {
  const { getByText } = render(<Items name="Liverpool Station" code="LST" />, {
    wrapper: MemoryRouter
  });
  const name = getByText("Liverpool Station");

  expect(getByText("Liverpool Station").closest("a")).toHaveAttribute(
    "href",
    "/departures/LST"
  );
  expect(name).toBeInTheDocument();
});
