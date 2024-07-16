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
  const baseProps = {
    options: FILTER_OPTIONS,
    onSelect: jest.fn(),
  };
  render(<Dropdown baseProps />);

  const dropdown = screen.getByTestId("dropdown");

  fireEvent.change(dropdown);
});
