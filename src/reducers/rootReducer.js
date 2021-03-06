const initState = {
    initialized: false,
    recentLaunches: {},
    upcomingLaunches: {},
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_RECENT_LAUNCHES' :
            return {...state, recentLaunches: action.payload}
        case 'SET_UPCOMING_LAUNCHES' :
            return {...state, upcomingLaunches: action.payload}
        case 'SET_INITIALIZED' :
            return {...state, initialized: action.payload}
        default:
            return state;
    }
}

export default rootReducer;