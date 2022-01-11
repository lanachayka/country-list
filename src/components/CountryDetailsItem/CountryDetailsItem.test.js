import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import CountryDetailsItem from "./CountryDetailsItem";
import { Context as ResponsiveContext } from 'react-responsive'

test('renders without errors with strings', () => {
   render(<CountryDetailsItem id={"country"} text={"Andorra"} color={"green"} title={"Country"}/>);
    expect(screen.getByTestId('details-item-component')).toBeInTheDocument();
});

test('renders without errors with arrays', () => {
    render(<CountryDetailsItem id={"currencies"} text={["EUR"]} color={"pink"} title={"Currencies"}/>);
    expect(screen.getByTestId('details-item-component')).toBeInTheDocument();
});

describe('screen width more than 780px', () => {
    beforeEach(() => {
        render(
            <ResponsiveContext.Provider value={{ width: 785 }}>
                <CountryDetailsItem id={"currencies"} text={["EUR"]} color={"pink"} title={"Currencies"}/>
            </ResponsiveContext.Provider>
        );
    });
    test('details-item-big-screen should be displayed', () => {
        expect(screen.getByTestId('details-item-big-screen')).toBeInTheDocument();
    });
});

describe('screen width less than 780px', () => {
    beforeEach(() => {
        render(
            <ResponsiveContext.Provider value={{ width: 500 }}>
                <CountryDetailsItem id={"currencies"} text={["EUR"]} color={"pink"} title={"Currencies"}/>
            </ResponsiveContext.Provider>
        );
    });
    test('details-item-small-screen should be displayed', () => {
        expect(screen.getByTestId('details-item-small-screen')).toBeInTheDocument();
    });
    test('details-balls should be displayed', () => {
        expect(screen.getByTestId('details-balls')).toBeInTheDocument();
    });
});

