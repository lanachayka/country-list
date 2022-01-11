import Enzyme, {shallow} from 'enzyme';
import App from "./App";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import {showChooseCard, showContainer, showCountryDetails, showCountryList} from "./helper";
import React from "react";
import Header from "../Header/Header";
import ChooseCard from "../ChooseCard/ChooseCard";
import CountryList from "../CountryList/CountryList";

Enzyme.configure({adapter: new EnzymeAdapter});

test('renders without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="app-component"]').length).toBe(1);
});

describe('components renders with right initial props', () => {
   let wrapper;
   beforeEach(() => {
       wrapper = shallow(<App />);
   });
   test('Header should have falsy prop isCardChosen', () => {
      const header = wrapper.find(Header);
      expect(header.props().isCardChosen).toBeFalsy();
   });
    test('ChooseCard should have falsy prop isCardChosen', () => {
        const header = wrapper.find(ChooseCard);
        expect(header.props().isCardChosen).toBeFalsy();
    });
    test('CountryList should have empty prop selectedCard', () => {
        const header = wrapper.find(CountryList);
        expect(header.props().selectedCard).toBe('');
    });
});

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



