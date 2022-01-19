import '@testing-library/jest-dom';
import {render, screen, fireEvent} from "@testing-library/react";
import Search from "./Search";

describe('render testing', () => {
  beforeEach(() => {
    render(<Search setSearchFilter={() => {}} setSearchBy={() => {}}/>);
  })
  test('renders without errors', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  test('country checkbox should be checked', () => {
    expect(screen.getByLabelText(/country/i)).toBeChecked();
  });
  test('other checkbox should not be checked', () => {
    expect(screen.getByLabelText(/capital/i)).not.toBeChecked();
    expect(screen.getByLabelText(/region/i)).not.toBeChecked();
    expect(screen.getByLabelText(/code/i)).not.toBeChecked();
  });
})

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

describe('setSearchBy function', () => {
  let mockSetSearchBy;
  beforeEach(() => {
    mockSetSearchBy = jest.fn();
    render(<Search setSearchFilter={() => {}} setSearchBy={mockSetSearchBy}/>);
  });
  test('function should be called with correct value', () => {
    const countryInput = screen.getByLabelText(/country/i);
    const capitalInput = screen.getByLabelText(/capital/i);
    fireEvent.click(capitalInput);
    fireEvent.click(countryInput);
    expect(mockSetSearchBy).toBeCalledWith('name');
  });
  test('function should be called with correct value', () => {
    const capitalInput = screen.getByLabelText(/capital/i);
    fireEvent.click(capitalInput);
    expect(mockSetSearchBy).toBeCalledWith('capital');
  });
  test('function should be called with correct value', () => {
    const regionInput = screen.getByLabelText(/region/i);
    fireEvent.click(regionInput);
    expect(mockSetSearchBy).toBeCalledWith('region');
  });
  test('function should be called with correct value', () => {
    const codeInput = screen.getByLabelText(/code/i);
    fireEvent.click(codeInput);
    expect(mockSetSearchBy).toBeCalledWith('code');
  });
});
