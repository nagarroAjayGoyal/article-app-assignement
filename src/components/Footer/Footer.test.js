import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("rendering Footer", () => {
  it("Shows footer", () => {
    render(<Footer />);
  });
});
