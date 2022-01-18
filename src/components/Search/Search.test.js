import '@testing-library/jest-dom';
import {render, screen, fireEvent} from "@testing-library/react";
import Search from "./Search";

test('renders without errors', () => {
  render(<Search setSearchFilter={() => {}}/>);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('function setSearchFilter should be called when input changed', () => {
  const mockSetSearchFilter = jest.fn();
  render(<Search setSearchFilter={mockSetSearchFilter}/>);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, {target: {value: 'test'}});
  expect(mockSetSearchFilter).toBeCalledWith('test');
});