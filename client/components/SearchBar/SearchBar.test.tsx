import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
  const setInputValue = jest.fn();

  it('should match snapshot', () => {
    const { container } = render(<SearchBar setInputValue={setInputValue} />);
    expect(container).toMatchSnapshot();
  });

  it('should trigger the props function when typing the input', () => {
    const { getByTestId } = render(<SearchBar setInputValue={setInputValue} />);
    fireEvent.change(getByTestId('searchBar'), { target: { value: 'miss' } });
    expect(setInputValue).toHaveBeenCalledTimes(1);
  })
})