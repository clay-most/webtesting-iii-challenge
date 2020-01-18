import React from "react";
import { render, cleanup } from "@testing-library/react";
import Controls from "./Controls";
import { fireEvent } from "@testing-library/react";

describe("<Controls /> Component", () => {
  it("renders without crashing", () => {
    render(<Controls />);
  });

  it("disables open button if gate is locked", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleClosed={toggleClosed} />
    );
    const open = getByText(/open gate/i);
    fireEvent.click(open);
    expect(toggleClosed).not.toHaveBeenCalled();
  });

  it("disables lock button if gate is open", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls closed={false} locked={false} toggleLocked={toggleLocked} />
    );
    const lock = getByText(/lock gate/i);
    fireEvent.click(lock);
    expect(toggleLocked).not.toHaveBeenCalled();
  });
});

afterEach(cleanup);
