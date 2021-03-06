import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import CountryItem from "./CountryItem";

Enzyme.configure({adapter: new EnzymeAdapter});

describe('render', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<CountryItem setSelectedCard={()=>{}} selectedCard={"AD"}
                                       setIsCardChosen={() => {}} setScrollPosition={() => {}} flag={"AD"}
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
    test('should render correct country name', () => {
        expect(wrapper.find('[data-testid="country"]').text()).toBe('Andorra');
    });
    test('should render correct capital', () => {
        expect(wrapper.find('[data-testid="capital"]').text()).toBe('Andorra la Vella');
    });
    test('should render correct region', () => {
        expect(wrapper.find('[data-testid="region"]').text()).toBe('Europe');
    });
});

test('should not render capital with empty string', () => {
    const wrapper = shallow(<CountryItem setSelectedCard={()=>{}} selectedCard={"AD"}
                                   setIsCardChosen={() => {}} setScrollPosition={()=>{}} flag={"AD"}
                                   country={"Andorra"} region={"Europe"} capital={""}/> );
    expect(wrapper.find('[data-testid="capital"]')).not.toHaveLength(1);
});

describe('functions should be called when clicked on wrapper', () => {
    let mockSetSelectedCard: () => void;
    let mockSetIsCardChosen: () => void;
    let mockSetScrollPosition: () => void;
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        mockSetSelectedCard = jest.fn();
        mockSetIsCardChosen = jest.fn();
        mockSetScrollPosition = jest.fn();
        wrapper = shallow(<CountryItem setSelectedCard={mockSetSelectedCard} selectedCard={"AN"}
                                             setIsCardChosen={mockSetIsCardChosen} setScrollPosition={mockSetScrollPosition} flag={"AD"}
                                             country={"Andorra"} region={"Europe"} capital={"Andorra la Vella"}/> );
        wrapper.simulate('click');
    });
    test('setSelectedCard should be called', () => {
        expect(mockSetSelectedCard).toBeCalledTimes(1);
    });
    test('setIsCardChosen should be called', () => {
        expect(mockSetSelectedCard).toBeCalledTimes(1);
    });
    test('setScrollPosition should be called', () => {
        expect(mockSetScrollPosition).toBeCalledTimes(1);
    });
});
