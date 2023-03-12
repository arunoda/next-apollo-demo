import { render, screen } from "@testing-library/react";
import Header from "./index";

const setup = () => {
  render(<Header />);

  const container = screen.getByTestId("header-container");
  const logo = screen.getByTestId("header-logo");
  const homeLink = screen.getByTestId("header-home-link");
  const employeesLink = screen.getByTestId("header-employees-link");
  const aboutMeLink = screen.getByTestId("header-about-me-link");

  return {
    container,
    logo,
    homeLink,
    employeesLink,
    aboutMeLink,
  };
};

describe("Header", () => {
  it("should successfully render the Header component.", () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });
  it("should have logo Nick Morgan.", () => {
    const { logo } = setup();

    // I expect the logo to exist.
    expect(logo).toBeInTheDocument();
    // I expect the logo to have the name Nick Morgan.
    expect(logo).toHaveTextContent("NickMorgan");
  });
  it("should redirect to the homepage when the logo is clicked.", () => {
    const { logo } = setup();

    // I expect the logo to exist.
    expect(logo).toBeInTheDocument();

    // I expect the url to be '/'
    expect(logo).toHaveAttribute("href", "/");
  });
  it("should have the menu items of Home, Employees and About Me.", () => {
    const { homeLink, employeesLink, aboutMeLink } = setup();

    // I expect the links to exist.
    expect(homeLink).toBeInTheDocument();
    expect(employeesLink).toBeInTheDocument();
    expect(aboutMeLink).toBeInTheDocument();

    // I expect the links to have the correct text.
    expect(homeLink).toHaveTextContent("Home");
    expect(employeesLink).toHaveTextContent("Employees");
    expect(aboutMeLink).toHaveTextContent("About Me");
  });
  it("should redirect to '/' when Home is clicked.", () => {
    const { homeLink } = setup();

    // I expect the links to exist.
    expect(homeLink).toBeInTheDocument();

    // I expect the url to be '/'
    expect(homeLink).toHaveAttribute("href", "/");
  });
  it("should redirect to '/employees' when Employees is clicked.", async () => {
    const { employeesLink } = setup();

    // I expect the links to exist.
    expect(employeesLink).toBeInTheDocument();

    // I expect the url to be '/employees'
    expect(employeesLink).toHaveAttribute("href", "/employees");
  });
  it("should redirect to 'github' when About Me is clicked.", () => {
    const { aboutMeLink } = setup();

    // I expect the links to exist.
    expect(aboutMeLink).toBeInTheDocument();

    // I expect the url to be my Git hub url: https://github.com/GhostCrawl3r
    expect(aboutMeLink).toHaveAttribute(
      "href",
      "https://github.com/GhostCrawl3r"
    );
  });
});
