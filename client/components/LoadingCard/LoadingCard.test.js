import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoadingCard from "./index";

describe("LoadingCard Component", () => {
  test("renders without crashing", () => {
    render(<LoadingCard />);
    expect(screen.getByTestId("loading-card")).toBeInTheDocument();
  });

  test("contains all placeholder elements", () => {
    render(<LoadingCard />);
    // Check for the presence of placeholder divs by class
    expect(screen.getAllByTestId("placeholder")).toHaveLength(5);
  });
});
