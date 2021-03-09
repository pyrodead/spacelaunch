import axios from 'axios';
import {
    getUpcomingLaunches,
    getRecentEvents,
    getMoreLaunches,
    createDateAsUTC,
    getNumberOfSlides,
} from './utils'

jest.mock('axios');

describe('Test utils', () => {
    it('getUpcomingLaunches', async() => {
        const data = {test: 'test'};

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getUpcomingLaunches()).resolves.toEqual(data);
    });

    it('getMoreLaunches', async() => {
        const data = {test: 'test'};

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getMoreLaunches()).resolves.toEqual(data);
    });

    it('getRecentEvents', async() => {
        const data = {test: 'test'};

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getRecentEvents()).resolves.toEqual(data);
    });

    it('createDateAsUTC', () => {
       const payload = '2021-04-11T00:00:00Z';
       const payload2 = '2021-03-11T00:00:00Z';

       const expected = 'Mar. 11, 2021, 00:00 a.m.';

        expect(createDateAsUTC(payload)).not.toEqual(expected);
        expect(createDateAsUTC(payload2)).toEqual(expected);
    });
})