import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import Header from "./Header";
import { Context as ResponsiveContext } from 'react-responsive';

test('renders without errors', () => {
    render(<Header isCardChosen={false} setIsCardChosen={() => {}}/>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('function called when arrow clicked', () => {
    const handleClick = jest.fn();
    render(<Header isCardChosen={true} setIsCardChosen={handleClick}/>);
    fireEvent.click(screen.getByTestId('arrow'));
    expect(handleClick).toBeCalledTimes(1);
});

describe('testing media query', () => {
    test('if screen width less than 780 px arrow should be displayed', () => {
       render(<ResponsiveContext.Provider value={{ width: 550 }}>
           <Header isCardChosen={true} setIsCardChosen={() => {}}/>
       </ResponsiveContext.Provider>);
       expect(screen.getAllByTestId('arrow')).toHaveLength(1);
    });
});