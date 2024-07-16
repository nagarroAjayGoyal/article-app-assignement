import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("rendering dashboard", () => {
  it("Shows dashboard", () => {
    render(<Dashboard />);
  });
});
