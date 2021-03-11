import React from "react";
import { shallow, mount } from 'enzyme';
import { AppContent } from "./App";
import axios from "axios";
import { getUpcomingLaunches, getUpcomingEvents } from './utils/utils';
import { Route, Redirect } from "react-router-dom";

jest.mock('axios');

describe('should render a HomePage', () => {
    const defaultProps = {
        setUpcomingLaunchesConnect: jest.fn(),
        setInitializedConnect: jest.fn(),
        setUpcomingEventsConnect: jest.fn(),
        initialized: false,
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AppContent {...defaultProps} />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    })

    it('should test useEffect with promise.resolve', async() => {
        const setUpcomingLaunchesConnectActionCreator = defaultProps.setUpcomingLaunchesConnect;
        const setUpcomingEventsConnectActionCreator = defaultProps.setUpcomingEventsConnect;
        const setInitializedConnectActionCreator = defaultProps.setInitializedConnect;

        axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: 'data' }))
        wrapper = mount(<AppContent {...defaultProps} />);

        await getUpcomingLaunches();
        expect(setUpcomingLaunchesConnectActionCreator).toHaveBeenCalled();
        await getUpcomingEvents();
        expect(setUpcomingEventsConnectActionCreator).toHaveBeenCalled();
    })

    it('should test useEffect with promise.reject', async() => {
        const setUpcomingLaunchesConnectActionCreator = defaultProps.setUpcomingLaunchesConnect;
        const setUpcomingEventsConnectActionCreator = defaultProps.setUpcomingEventsConnect;

        axios.get.mockImplementation(() => Promise.reject(new Error('error message')))
        wrapper = mount(<AppContent {...defaultProps} />);

        await expect(getUpcomingLaunches()).rejects.toThrow('error message');
        expect(setUpcomingLaunchesConnectActionCreator).toHaveBeenCalled();
        await expect(getUpcomingEvents()).rejects.toThrow('error message');
        expect(setUpcomingEventsConnectActionCreator).toHaveBeenCalled();
    })

    it('test return with initialized true', () => {
        wrapper.setProps({ initialized: true })

        expect(wrapper.find(Route)).toHaveLength(2);
        expect(wrapper.find(Redirect)).toHaveLength(1);
    });
});