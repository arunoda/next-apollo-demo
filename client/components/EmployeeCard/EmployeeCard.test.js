import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import EmployeeCard from "./index";

describe("EmployeeCard Component", () => {
  // Sample data for an employee
  const employeeData = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: {
      streetAddress: "123 Main St",
      city: "Anytown",
    },
  };

  test("renders employee information with full details", () => {
    render(<EmployeeCard {...employeeData} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Anytown")).toBeInTheDocument();
  });

  test("renders employee information without lastName and address", () => {
    // Destructure to omit lastName and address from employeeData
    const { lastName, address, ...partialData } = employeeData;
    render(<EmployeeCard {...partialData} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.queryByText("Doe")).toBeNull(); // LastName should not be rendered
    expect(screen.getByText("No Address")).toBeInTheDocument();
    expect(screen.getByText("No City")).toBeInTheDocument();
  });

  test("renders employee information with only required props", () => {
    // Only provide required props
    const requiredProps = {
      id: employeeData.id,
      firstName: employeeData.firstName,
      email: employeeData.email,
      phoneNumber: employeeData.phoneNumber,
    };
    render(<EmployeeCard {...requiredProps} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("No Address")).toBeInTheDocument();
    expect(screen.getByText("No City")).toBeInTheDocument();
  });
});
