import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

const mockCall = jest.fn();

const setup = () => {
  render(<Button onClick={mockCall} label="test-button" className="" />);

  const container = screen.getByTestId("button-container");

  const clickButton = () => fireEvent.click(container);

  return {
    container,
    clickButton,
  };
};

describe("Button", () => {
  it("should render the Button component", () => {
    const { container } = setup();

    // I expect the button to exist.
    expect(container).toBeInTheDocument();

    // I expect the button to have a label of "test-button".
    expect(container).toHaveTextContent("test-button");
  });
  it("should register button clicks when clicked", () => {
    const { container, clickButton } = setup();

    // I expect the button to exist.
    expect(container).toBeInTheDocument();

    // I will click the button 3 times to see if the click event is fired 3 times.
    clickButton();
    clickButton();
    clickButton();

    expect(mockCall).toHaveBeenCalledTimes(3);
  });
});
