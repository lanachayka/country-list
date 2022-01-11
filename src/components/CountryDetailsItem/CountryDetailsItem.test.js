import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import CountryDetailsItem from "./CountryDetailsItem";
import { Context as ResponsiveContext } from 'react-responsive'

describe('renders without errors with strings', () => {
    beforeEach(() => {
        render(<CountryDetailsItem id={"country"} text={"Andorra"} color={"green"} title={"Country"}/>);
    });
    test('should render component', () => {
        expect(screen.getByTestId('details-item-component')).toBeInTheDocument();
    });
    test('should render component with correct title', () => {
        expect(screen.getByTestId('title')).toHaveTextContent('Country');
    });
    test('should render component with correct text', () => {
        expect(screen.getByTestId('text-string')).toHaveTextContent('Andorra');
    });
    test('should render component with correct color ball', () => {
        expect(screen.getByAltText('green list items')).toBeInTheDocument();
    });
});

describe('renders without errors with arrays', () => {
    beforeEach(() => {
        render(<CountryDetailsItem id={"currencies"} text={["EUR", "USD"]} color={"pink"} title={"Currencies"}/>);
    });
    test('should render component', () => {
        expect(screen.getByTestId('details-item-component')).toBeInTheDocument();
    });
    test('should render component with two paragraph', () => {
        expect(screen.getAllByTestId('text-array')).toHaveLength(2);
    });
});

describe('screen width more than 780px', () => {
    beforeEach(() => {
        render(
            <ResponsiveContext.Provider value={{ width: 785 }}>
                <CountryDetailsItem id={"currencies"} text={["EUR", "USD"]} color={"pink"} title={"Currencies"}/>
            </ResponsiveContext.Provider>
        );
    });
    test('details-item-big-screen should be displayed', () => {
        expect(screen.getByTestId('details-item-big-screen')).toBeInTheDocument();
    });
    test('only first item from array should be displayed', () => {
        expect(screen.getByTestId('details-item-big-screen')).toHaveTextContent("EUR");
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

