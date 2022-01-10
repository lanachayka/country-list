import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import CountryItem from "./CountryItem";

Enzyme.configure({adapter: new EnzymeAdapter});

describe('render', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CountryItem setSelectedCard={()=>{}} selectedCard={"AD"}
                                       setIsCardChosen={() => {}} flag={"AD"}
                                       country={"Andorra"} region={"Europe"} capital={"Andorra la Vella"}/> );
    });
    test('renders without errors', () => {
        expect(wrapper.find('[data-test-id="item-component"]').length).toBe(1);
    });
    test('if selectedCard equal flag main wrapper should not have id none', () => {
        expect(wrapper.find('#none').length).toBe(0);
    });
    test('if selectedCard equal flag main wrapper should have id selected', () => {
        expect(wrapper.find('#selected').length).toBe(1);
    });
});

describe('functions should be called when clicked on wrapper', () => {
    let mockSetSelectedCard;
    let mockSetIsCardChosen;
    let wrapper;
    beforeEach(() => {
        mockSetSelectedCard = jest.fn();
        mockSetIsCardChosen = jest.fn();
        wrapper = shallow(<CountryItem setSelectedCard={mockSetSelectedCard} selectedCard={"AN"}
                                             setIsCardChosen={mockSetIsCardChosen} flag={"AD"}
                                             country={"Andorra"} region={"Europe"} capital={"Andorra la Vella"}/> );
        wrapper.simulate('click');
    });
    test('setSelectedCard should be called', () => {
        expect(mockSetSelectedCard).toBeCalledTimes(1);
    });
    test('mockSetIsCardChosen should be called', () => {
        expect(mockSetSelectedCard).toBeCalledTimes(1);
    });
});
