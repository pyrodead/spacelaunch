const initState = {
    initialized: false,
    pager: {
        launchesOffset: 10,
    },
    upcomingLaunches: {},
    upcomingEvents: {},
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_UPCOMING_LAUNCHES' :
            return {...state, upcomingLaunches: action.payload}
        case 'INCREMENT_UPCOMING_LAUNCHES' :
            return {...state, upcomingLaunches: { ...state.upcomingLaunches, results: [...state.upcomingLaunches.results, ...action.payload.results] } }
        case 'SET_CURRENT_LAUNCH' :
            return {...state, currentLaunch: action.payload }
        case 'INCREMENT_LAUNCHES_OFFSET' :
            return {...state, pager: { launchesOffset: state.pager.launchesOffset += 10 } }
        case 'SET_LAUNCHES_OFFSET' :
            return {...state, pager: { launchesOffset: action.payload } }
        case 'SET_UPCOMING_EVENTS' :
            return {...state, upcomingEvents: action.payload}
        case 'SET_INITIALIZED' :
            return {...state, initialized: action.payload}
        default:
            return state;
    }
}

export default rootReducer;