import { shallow } from 'enzyme';
import HomePage from "./HomePage";
import UpcomingLaunches from './UpcomingLaunches';
import UpcomingEvents from './UpcomingEvents';

describe('should render a HomePage', () => {
    const wrapper = shallow(
        <HomePage />,
    );

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find(UpcomingLaunches)).toHaveLength(1);
        expect(wrapper.find(UpcomingEvents)).toHaveLength(1);
    })
});