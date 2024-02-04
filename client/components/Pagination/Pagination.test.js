import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pagination from "./index";

describe("Pagination Component", () => {
  const handlePrevMock = jest.fn();
  const handleNextMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with both buttons enabled", () => {
    render(
      <Pagination isFirstPage={false} isLastPage={false} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).not.toHaveClass("opacity-50 cursor-not-allowed");
    expect(nextButton).not.toHaveClass("opacity-50 cursor-not-allowed");
  });

  test("disables the Previous button on the first page", () => {
    render(
      <Pagination isFirstPage={true} isLastPage={false} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });

    expect(prevButton).toHaveClass("opacity-50 cursor-not-allowed");
    expect(prevButton).toBeDisabled();
  });

  test("disables the Next button on the last page", () => {
    render(
      <Pagination isFirstPage={false} isLastPage={true} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(nextButton).toHaveClass("opacity-50 cursor-not-allowed");
    expect(nextButton).toBeDisabled();
  });

  test("calls handlePrev when Previous is clicked", () => {
    render(
      <Pagination isFirstPage={false} isLastPage={false} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);

    expect(handlePrevMock).toHaveBeenCalled();
  });

  test("calls handleNext when Next is clicked", () => {
    render(
      <Pagination isFirstPage={false} isLastPage={false} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(handleNextMock).toHaveBeenCalled();
  });

  test("does not call handlePrev when Previous is clicked and isFirstPage is true", () => {
    render(
      <Pagination isFirstPage={true} isLastPage={false} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);

    expect(handlePrevMock).not.toHaveBeenCalled();
  });

  test("does not call handleNext when Next is clicked and isLastPage is true", () => {
    render(
      <Pagination isFirstPage={false} isLastPage={true} handlePrev={handlePrevMock} handleNext={handleNextMock} />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(handleNextMock).not.toHaveBeenCalled();
  });
});
