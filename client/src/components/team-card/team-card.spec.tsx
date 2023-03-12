import { render, screen } from "@testing-library/react";
import TeamCard from "./index";
import { Employee } from "../../entities/employee";

const EmployeeData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "555-555-5555",
  address: {
    firstLine: "Flat 123",
    street: "123 Main Street",
    city: "New York",
  },
} as Employee;

const setup = () => {
  render(<TeamCard employee={EmployeeData} />);

  const container = screen.getByTestId("team-card-container");
  const profileImage = screen.getByTestId("team-card-image");
  const fullName = screen.getByTestId("team-card-full-name");
  const email = screen.getByTestId("team-card-email");
  const phoneNumber = screen.getByTestId("team-card-phone-number");
  const firstLine = screen.getByTestId("team-card-address-first-line");
  const street = screen.getByTestId("team-card-address-street");
  const city = screen.getByTestId("team-card-address-city");

  return {
    container,
    profileImage,
    fullName,
    email,
    phoneNumber,
    firstLine,
    street,
    city,
  };
};

describe("TeamCard", () => {
  it("should render the Team Card component.", () => {
    const { container } = setup();

    // I expect the team card to exist.
    expect(container).toBeInTheDocument();
  });
  it("should render the team card image.", () => {
    const { profileImage } = setup();

    // I expect the profile image to exist.
    expect(profileImage).toBeInTheDocument();
  });
  it("should render the team card full name.", () => {
    const { fullName } = setup();

    // I expect the full-name to exist.
    expect(fullName).toBeInTheDocument();

    // I expect the full-name to match the employeeData's firstName + lastName.
    const fullNameText = `${EmployeeData.firstName} ${EmployeeData.lastName}`;
    expect(fullName).toHaveTextContent(fullNameText);
  });
  it("should render the team card email.", () => {
    const { email } = setup();

    // I expect the email to exist.
    expect(email).toBeInTheDocument();

    // I expect the email to match the employeeData's email.
    const emailText = EmployeeData.email;
    expect(email).toHaveTextContent(emailText);
  });
  it("should render the team card phone number.", () => {
    const { phoneNumber } = setup();

    // I expect the phone number to exist.
    expect(phoneNumber).toBeInTheDocument();

    // I expect the phone number to match the employeeData's phoneNumber.
    const phoneNumberText = EmployeeData.phoneNumber;
    expect(phoneNumber).toHaveTextContent(phoneNumberText);
  });
  it("should render the team card address.", () => {
    const { firstLine, street, city } = setup();

    // I expect the address parts to exist.
    expect(firstLine).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();

    // I expect the first line to match the employeeData's address.
    const firstLineText = EmployeeData.address.firstLine;
    const streetText = EmployeeData.address.street;
    const cityText = EmployeeData.address.city;

    expect(firstLine).toHaveTextContent(firstLineText);
    expect(street).toHaveTextContent(streetText);
    expect(city).toHaveTextContent(cityText);
  });
});
