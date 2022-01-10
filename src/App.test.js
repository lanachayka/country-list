import Enzyme, {shallow} from 'enzyme';
import App from "./App";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new EnzymeAdapter});

test('renders without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="app-component"]').length).toBe(1);
});
