import { useEffect } from 'react';
import './App.scss';
import jsonLaunches from './json/dummyLaunches.json';
import jsonEvents from './json/dummyEvents.json';
import {
    setInitialized,
    setUpcomingLaunches,
    setUpcomingEvents,
} from './actions';
import {connect} from 'react-redux';
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import axios from "axios";
import HomePage from './components/HomePage';
import LaunchPage from './components/LaunchPage';

const App = (props) => {
    const {
        setUpcomingLaunchesConnect,
        setInitializedConnect,
        setUpcomingEventsConnect,
    } = props;

    useEffect(() => {
        const launches = axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed')
            .then((response) => {
                if (response.status === 200) {
                    setUpcomingLaunchesConnect(response.data);
                }
            })
            .catch((err) => {
                console.error(err);
                setUpcomingLaunchesConnect(jsonLaunches);
            })

        const events = axios.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/')
            .then((response) => {
                if (response.status === 200) {
                    setUpcomingEventsConnect(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
                setUpcomingEventsConnect(jsonEvents);
            })

        Promise.all([launches, events]).then((resp) => {
            setInitializedConnect(true);
        })
    }, [
        setUpcomingLaunchesConnect,
        setInitializedConnect,
        setUpcomingEventsConnect,
    ])

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

const mapStateToProps = (state) => ({
    initialized: state.initialized,
});

const mapDispatchToProps = {
    setUpcomingLaunchesConnect: setUpcomingLaunches,
    setUpcomingEventsConnect: setUpcomingEvents,
    setInitializedConnect: setInitialized,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
