import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("rendering Header", () => {
  it("Shows Header", () => {
    render(<Header />);
  });
});
