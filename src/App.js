import { useEffect } from 'react';
import './App.scss';
import jsonLaunches from './json/dummyLaunches.json';
import jsonEvents from './json/dummyEvents.json';
import {
    setInitialized,
    setUpcomingLaunches,
    setUpcomingEvents,
} from './actions';
import {
    getUpcomingLaunches,
    getRecentEvents,
} from './utils/utils'
import { connect } from 'react-redux';
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import LaunchPage from './components/LaunchPage';
import PropTypes from "prop-types";

export const AppContent = (props) => {
    const {
        setUpcomingLaunchesConnect,
        setInitializedConnect,
        setUpcomingEventsConnect,
    } = props;

    useEffect(() => {
        // Added dummy json, API is down 90% of the time
        const launches = getUpcomingLaunches()
            .then((response) => {
                if (response.status === 200) {
                    setUpcomingLaunchesConnect(response.data);
                }
            })
            .catch(() => {
                setUpcomingLaunchesConnect(jsonLaunches);
            });

        const events = getRecentEvents()
            .then((response) => {
                if (response.status === 200) {
                    setUpcomingEventsConnect(response.data);
                }
            })
            .catch(() => {
                setUpcomingEventsConnect(jsonEvents);
            });

        Promise.all([launches, events])
            .then((resp) => {
                setInitializedConnect(true);
            })
            .catch(() => {
                setInitializedConnect(true);
            });
    })

    const {initialized} = props;

    if (!initialized) {
        return null;
    }

    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact strict component={HomePage}/>
                <Route path="/launch/:launchId" exact component={LaunchPage} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    );
}

AppContent.propTypes = {
    setUpcomingLaunchesConnect: PropTypes.func.isRequired,
    setInitializedConnect: PropTypes.func.isRequired,
    setUpcomingEventsConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    initialized: state.initialized,
});

const mapDispatchToProps = {
    setUpcomingLaunchesConnect: setUpcomingLaunches,
    setUpcomingEventsConnect: setUpcomingEvents,
    setInitializedConnect: setInitialized,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
