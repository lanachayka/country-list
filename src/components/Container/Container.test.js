import Enzyme, {shallow} from 'enzyme';
import Container from "./Container";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new EnzymeAdapter});

describe('renders without errors', () => {
   let wrapper;
   beforeEach(() => {
      wrapper = shallow(<Container selectedCard={"AD"}/>);
   });
   test('should render a component', () => {
      expect(wrapper.find('[data-testid="container-component"]').length).toBe(1);
   });
   test('should render a flag with code AD', () => {
      expect(wrapper.find('[alt="Flag of AD"]')).toBeDefined();
   });
});
