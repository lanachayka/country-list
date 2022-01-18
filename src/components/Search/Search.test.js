import '@testing-library/jest-dom';
import {render, screen, fireEvent} from "@testing-library/react";
import Search from "./Search";

test('renders without errors', () => {
  render(<Search setSearchFilter={() => {}}/>);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

describe('setSearchFilter function', () => {
  let mockSetSearchFilter;
  let input;
  beforeEach(() => {
    mockSetSearchFilter = jest.fn();
    render(<Search setSearchFilter={mockSetSearchFilter}/>);
    input = screen.getByRole('textbox');
  });
  test('should be called when input changed', () => {
    fireEvent.change(input, {target: {value: 'test'}});
    expect(mockSetSearchFilter).toBeCalled();
  });
  test('should be not case sensitive', () => {
    fireEvent.change(input, {target: {value: 'TEsT'}});
    expect(mockSetSearchFilter).toBeCalledWith('test');
  });
});
