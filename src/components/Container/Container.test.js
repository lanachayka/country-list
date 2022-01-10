import Enzyme, {shallow} from 'enzyme';
import Container from "./Container";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new EnzymeAdapter});

test('renders without errors', () => {
   const wrapper = shallow(<Container selectedCard={"AD"}/>);
   expect(wrapper.find('[data-testid="container-component"]').length).toBe(1);
});