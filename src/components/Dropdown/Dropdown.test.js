import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Dropdown from "./Dropdown";
import { FILTER_OPTIONS } from "../../config/constant";

describe("rendering dropdown component", () => {
  it("Shows dropdown", () => {
    render(<Dropdown />);
  });
});
describe("rendering Artical List with List ", () => {
  const onSelect = jest.fn();
  render(<Dropdown options={FILTER_OPTIONS} onSelect={onSelect} />);

  const dropdown = screen.getByTestId("dropdown");

  fireEvent.change(dropdown);
});
