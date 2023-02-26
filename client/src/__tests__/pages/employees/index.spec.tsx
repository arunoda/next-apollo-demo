import { render, screen } from "@testing-library/react";
import Employees, { getServerSideProps } from "../../../pages/employees";
import { employeesTestData } from "../../../dummyData/employeeData";

const setup = () => {
  render(<Employees data={{ employees: employeesTestData }} />);

  const container = screen.getByTestId("employees-container");
  const teamCards = screen.getAllByTestId("team-card-container");
  const loadMore = screen.getByTestId("button-container");

  return {
    container,
    teamCards,
    loadMore,
  };
};

describe("Employees Page", () => {
  it("Should mock getServerSideProps successfully.", async () => {
    const res = await getServerSideProps();

    expect(res).not.toBeNull();
  });
  it("should render the employees page successfully.", () => {
    const { container } = setup();

    // I expect the page to have rendered.
    expect(container).toBeInTheDocument();
  });
  it("should render 20 team cards.", () => {
    const { teamCards } = setup();

    // I expect 20 team cards to be rendered.
    expect(teamCards).toHaveLength(20);
  });
  it("should the 'Load More' button.", () => {
    const { loadMore } = setup();

    // I expect the 'Load More' button to be rendered.
    expect(loadMore).toBeInTheDocument();
  });
});
