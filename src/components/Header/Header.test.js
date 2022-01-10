import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import Header from "./Header";

test('renders without errors', () => {
    render(<Header isCardChosen={false} setIsCardChosen={() => {}}/>);
    expect(screen.getAllByTestId('header').length).toBeGreaterThan(0);
});

test('function called when arrow clicked', () => {
    const handleClick = jest.fn();
    render(<Header isCardChosen={true} setIsCardChosen={handleClick}/>);
    fireEvent.click(screen.getByTestId('arrow'));
    expect(handleClick).toBeCalledTimes(1);
});