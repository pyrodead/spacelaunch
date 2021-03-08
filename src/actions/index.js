export const setUpcomingLaunches = (data) => ({
    type: 'SET_UPCOMING_LAUNCHES',
    payload: data,
});

export const incrementUpcomingLaunches = (data) => ({
    type: 'INCREMENT_UPCOMING_LAUNCHES',
    payload: data,
});

export const setCurrentLaunch = (data) => ({
    type: 'SET_CURRENT_LAUNCH',
    payload: data,
});

export const incrementLaunchesOffset = () => ({
    type: 'INCREMENT_LAUNCHES_OFFSET',
});

export const setInitialized = (data) => ({
    type: 'SET_INITIALIZED',
    payload: data,
});

export const setUpcomingEvents = (data) => ({
    type: 'SET_UPCOMING_EVENTS',
    payload: data,
});


