import { render, screen } from "@testing-library/react";
import Home from "../../pages";

const setup = () => {
  render(<Home />);

  const header = screen.getByTestId("header-container");
  const container = screen.getByTestId("home-container");
  const main = screen.getByRole("main");
  const title = screen.getByTestId("home-title");
  const subTitle = screen.getByTestId("home-subtitle");

  return {
    header,
    container,
    main,
    title,
    subTitle,
  };
};

describe("Home Page", () => {
  it("should render the home page.", () => {
    const { container, main, header } = setup();

    // I expect the header component to exist.
    expect(header).toBeInTheDocument();

    // I expect the home page to exist.
    expect(container).toBeInTheDocument();

    // I expect the main tag to exist.
    expect(main).toBeInTheDocument();
  });
  it("should render the home page title.", () => {
    const { title } = setup();

    // I expect the title to exist.
    expect(title).toBeInTheDocument();

    // I expect the title to have the correct text.
    expect(title).toHaveTextContent("Welcome to Nick Morgan's Technical test.");
  });
  it("should render the home page subtitle.", () => {
    const { subTitle } = setup();

    // I expect the subtitle to exist.
    expect(subTitle).toBeInTheDocument();

    // I expect the subtitle to have the correct text.
    expect(subTitle).toHaveTextContent(
      'Please visit the employee\'s list page via the navigation bar under "Employees"'
    );
  });
});
