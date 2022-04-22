import Enzyme from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import {showChooseCard, showContainer, showCountryDetails, showCountryList} from "./helper";
import React from "react";

Enzyme.configure({adapter: new EnzymeAdapter});

describe('function showCountryList', () => {
    test('should return component', () => {
        const Component = <React.Fragment />;
        const result = showCountryList(true, false, Component);
        expect(result).toStrictEqual(<React.Fragment />);
    });
    test('should return empty div with class Main', () => {
        const Component = <React.Fragment />;
        const result = showCountryList(false, true, Component);
        expect(result).toStrictEqual(<div className="Main"/>);
    });
});

describe('function showChooseCard', () => {
    test('should return component', () => {
        const Component = <React.Fragment />;
        const result = showChooseCard(false, false, Component);
        expect(result).toStrictEqual(<React.Fragment />);
    });
    test('function should return empty div with class Main', () => {
        const Component = <React.Fragment />;
        const result = showChooseCard(true, true, Component);
        expect(result).toStrictEqual(<div className="Main"/>);
    });
});

describe('function showCountryDetails', () => {
    test('should return component', () => {
        const Component = <React.Fragment />;
        const result = showCountryDetails(false, true, Component);
        expect(result).toStrictEqual(<React.Fragment />);
    });
    test('function should return empty div with class Main', () => {
        const Component = <React.Fragment />;
        const result = showCountryDetails(true, true, Component);
        expect(result).toStrictEqual(<div className="Main"/>);
    });
});

describe('function showContainer', () => {
    test('should return component', () => {
        const Component = <React.Fragment />;
        const result = showContainer(true, true, Component);
        expect(result).toStrictEqual(<React.Fragment />);
    });
    test('should return empty div with class Main', () => {
        const Component = <React.Fragment />;
        const result = showContainer(true, false, Component);
        expect(result).toStrictEqual(<div className="Main"/>);
    });
});