import React from "react";
import { render, cleanup } from "@testing-library/react";
import Display from "./Display";

describe("<Display /> Component", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("displays unlocked when unlocked", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/^unlocked/i);
  });
  it("displays locked when locked", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/^locked$/i);
  });
  it("displays open when open", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/^open$/i);
  });
  it("displays closed when closed", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/^closed$/i);
  });
});

afterEach(cleanup);
