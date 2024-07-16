import React from "react";
import { render } from "@testing-library/react";

import Loader from "./Loader";

describe("rendering Header", () => {
  it("Shows without loading", () => {
    render(<Loader />);
  });
  it("Shows with loading", () => {
    render(<Loader isLoading={true} />);
  });
  it("Shows loading flag is false", () => {
    render(<Loader isLoading={false} />);
  });
});
