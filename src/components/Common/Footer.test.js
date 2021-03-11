import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('should render a Footer', () => {
    const wrapper = shallow(
        <Footer />,
    );

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    })
});