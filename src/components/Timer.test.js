import { shallow, mount } from 'enzyme';
import Timer from "./Timer";
import React from "react";

describe('should render a Timer', () => {
    const defaultProps = {
        date: new Date(Date.now() + 10000),
    }
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Timer {...defaultProps} />);
    });

    it('should render without errors', () => {
        wrapper = mount(<Timer {...defaultProps} />);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('.sl-timer')).toHaveLength(1);
    })

    it('should render completion component', () => {
        const newDate = new Date(1615455323731);

        wrapper = mount(<Timer date={newDate} />);
        const complete = wrapper.find('.sl-launch-completed');

        expect(complete).toHaveLength(1);
    })
});