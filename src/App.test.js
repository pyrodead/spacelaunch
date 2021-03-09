import React from "react";
import { shallow, mount, render } from 'enzyme';
import { act } from '@testing-library/react';
import { AppContent } from "./App";
import axios from "axios";
import { getUpcomingLaunches, getRecentEvents } from './utils/utils';

// jest.mock('./utils/utils', () => (
//     {
//         ...(jest.requireActual('./utils/utils')),
//         getUpcomingLaunches: jest.fn(),
//         // getRecentEvents: jest.fn().mockImplementationOnce(() => Promise.resolve({status: 200})),
//     }
// ));

jest.mock('axios');

describe('should render a HomePage', () => {
    const defaultProps = {
        setUpcomingLaunchesConnect: jest.fn(),
        setInitializedConnect: jest.fn(),
        setUpcomingEventsConnect: jest.fn(),
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AppContent {...defaultProps} />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    })

    it('should test useEffect', async() => {
        const setUpcomingLaunchesConnectActionCreator = defaultProps.setUpcomingLaunchesConnect;
        const setUpcomingEventsConnectActionCreator = defaultProps.setUpcomingEventsConnect;
        const setInitializedConnectConnectActionCreator = defaultProps.setInitializedConnect;

        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        axios.get.mockImplementation(() => Promise.resolve({ status: 200 }))
        wrapper = mount(<AppContent {...defaultProps} />);

        const resp1 = await getUpcomingLaunches();
        expect(setUpcomingLaunchesConnectActionCreator).toHaveBeenCalled();
        const resp2 = await getRecentEvents();
        expect(setUpcomingEventsConnectActionCreator).toHaveBeenCalled();
        await Promise.all([resp1, resp2]);
        expect(setInitializedConnectConnectActionCreator).toHaveBeenCalled();

    })

});