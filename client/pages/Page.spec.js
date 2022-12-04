import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "./index";

describe("Page", () => {
  it("renders a page sub heading", () => {
    render(<Page />);

    const heading = screen.getByTestId("sub-heading");
    expect(heading).toHaveTextContent("Looking for Users Address?Click Me!!");
  });
});
