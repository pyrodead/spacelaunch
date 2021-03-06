import { Component } from 'react';
import './App.scss';
import jsonRecent from './json/dummy.json';
import {
    setInitialized,
    setRecentLaunches,
    setUpcomingLaunches,
} from './actions';
import {connect} from 'react-redux';
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import axios from "axios";
import Launches from './components/Launches';

class App extends Component {
    componentDidMount() {
        const {
            setRecentLaunchesConnect,
            setInitializedConnect,
            setUpcomingLaunchesConnect
        } = this.props;

        // const recent = axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed')
        //     .then((response) => {
        //         if (response.status === 200) {
        //             setRecentLaunchesConnect(response.data);
        //         }
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         setRecentLaunchesConnect(jsonRecent);
        //     })

        setRecentLaunchesConnect(jsonRecent);

        const upcoming = axios.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/')
            .then((response) => {
                if (response.status === 200) {
                    setUpcomingLaunchesConnect(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
                setUpcomingLaunchesConnect(jsonRecent);
            })

        Promise.all([upcoming]).then((resp) => {
            setInitializedConnect(true);
        })
    }

    render() {
        const {initialized} = this.props;

        if (!initialized) {
            return null;
        }

        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact strict component={Launches}/>
                    <Redirect to="/"/>
                </Switch>
            </HashRouter>
        );

    }

}

const mapStateToProps = (state) => ({
    initialized: state.initialized,
});

const mapDispatchToProps = {
    setRecentLaunchesConnect: setRecentLaunches,
    setUpcomingLaunchesConnect: setUpcomingLaunches,
    setInitializedConnect: setInitialized,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
