import React from "react";
import { render, cleanup} from "@testing-library/react";

import Dashboard from "./Dashboard.js";

describe("<Dashboard /> Component", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });

  it("renders controls", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlock/i);
    getByText(/lock gate/i);
    getByText(/open/i);
    getByText(/close gate/i);
  });
});

afterEach(cleanup);
