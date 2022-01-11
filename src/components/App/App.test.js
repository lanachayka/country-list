import Enzyme, {shallow} from 'enzyme';
import App from "./App";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
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




