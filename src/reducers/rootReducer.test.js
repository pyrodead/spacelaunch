import store from  '../redux/store';
import {
    setUpcomingLaunches,
    incrementUpcomingLaunches,
    setCurrentLaunch,
    incrementLaunchesOffset,
    setInitialized,
    setUpcomingEvents,
} from '../actions';

function getActual() {
    return store.getState();
}

describe('Reducers', () => {
    it('setUpcomingLaunches', () => {
        const payload = { test: 'test', results: [1, 2, 3] };
        const payload2 = { test: 'test', results: [4, 6, 7] };
        const expected = { test: 'test', results: [1, 2, 3] };

        store.dispatch(setUpcomingLaunches(payload))

        let actual = getActual();

        expect(actual.upcomingLaunches).toEqual(expected);

        store.dispatch(setUpcomingLaunches(payload2))

        actual = getActual();

        expect(actual.upcomingLaunches).not.toEqual(expected);
    });

    it('incrementUpcomingLaunches', () => {
        const payload = { test: 'test', results: [1, 2, 3] };

        const expected = [4, 6, 7, 1, 2, 3];

        store.dispatch(incrementUpcomingLaunches(payload))

        const actual = getActual();

        expect(actual.upcomingLaunches.results).toEqual(expected);
    });

    it('setCurrentLaunch', () => {
        const payload = { test: 'test' };
        const payload2 = { test: 'test2' };
        const expected = { test: 'test' };

        store.dispatch(setCurrentLaunch(payload))

        let actual = getActual();

        expect(actual.currentLaunch).toEqual(expected);

        store.dispatch(setCurrentLaunch(payload2))

        actual = getActual();

        expect(actual.currentLaunch).not.toEqual(expected);
    });

    it('incrementLaunchesOffset', () => {
        const expected = { launchesOffset: 20 };

        store.dispatch(incrementLaunchesOffset())

        let actual = getActual();

        expect(actual.pager).toEqual(expected);

        store.dispatch(incrementLaunchesOffset())

        actual = getActual();

        expect(actual.pager).not.toEqual(expected);
    });

    it('setInitialized', () => {
        const expected = true;

        store.dispatch(setInitialized(true))

        let actual = getActual();

        expect(actual.initialized).toEqual(expected);

        store.dispatch(setInitialized(false))

        actual = getActual();

        expect(actual.initialized).not.toEqual(expected);
    });

    it('setUpcomingEvents', () => {
        const payload = { test: 'test' };

        store.dispatch(setUpcomingEvents(payload));

        let actual = getActual();

        expect(actual.upcomingEvents).toEqual(payload);

        store.dispatch(setUpcomingEvents({ newTest: 'test' }));

        actual = getActual();

        expect(actual.upcomingEvents).not.toEqual(payload);
    });
})