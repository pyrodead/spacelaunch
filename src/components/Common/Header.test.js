import React from "react";
import { shallow } from 'enzyme';
import { HeaderContent } from "./Header";
import Timer from '../Timer';
import { currentLaunch } from '../LaunchPage.test';

describe('should render a <Header />', () => {
    const defaultProps = {
        title: 'title',
        subtitle: 'subtitle',
        isHomePage: false,
        timer: true,
        currentLaunch,
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HeaderContent {...defaultProps} />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('.sl-header')).toHaveLength(1);
    });

    it('should test non-Homepage Header', () => {
        const btn = wrapper.find('button.sl-btn');
        const navBtn = wrapper.find('.sl-nav-btn');
        const header = wrapper.find('.sl-header.-homepage');
        const timer = wrapper.find(Timer);

        expect(btn).toHaveLength(0);
        expect(navBtn).toHaveLength(1);
        expect(header).toHaveLength(0);
        expect(timer).toHaveLength(1);
    });

    it('should test Homepage Header', () => {
        wrapper.setProps({ isHomePage: true, timer: false });

        const btn = wrapper.find('button.sl-btn');
        const navBtn = wrapper.find('.sl-nav-btn');
        const header = wrapper.find('.sl-header.-homepage');
        const timer = wrapper.find(Timer);

        expect(btn).toHaveLength(1);
        expect(navBtn).toHaveLength(0);
        expect(header).toHaveLength(1);
        expect(timer).toHaveLength(0);
    });
});