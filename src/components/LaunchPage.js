import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import LaunchDetails from './LaunchDetails';
import { setCurrentLaunch } from "../actions";
import ReactPlayer from 'react-player';
import GMap from "./Gmap";
import PropTypes from "prop-types";

export const LaunchPageContent = (props) => {
    const {
        currentLaunch,
        upcomingLaunches,
        match: { params: { launchId } },
        setCurrentLaunchConnect,
    } = props;

    useEffect(() => {
        if (launchId) {
            const currentLaunch = upcomingLaunches.results.filter((item) => item.id === launchId);
            setCurrentLaunchConnect(currentLaunch[0]);
        }
    }, [setCurrentLaunchConnect, upcomingLaunches, launchId]);

    if (currentLaunch?.id !== launchId) {
        return (
            <div className="sl-warning">No Launches Found with given id!</div>
        )
    }

    const video = currentLaunch.vidURLs.find(a =>a.includes("youtube"));

    return (
        <>
            <Header
                title={currentLaunch.name}
                timer
            />
            <main className="sl-content-wrapper">
                <div className="sl-main-content -launch-page">
                    {
                        currentLaunch.vidURLs.length
                            ? (
                                <div className="sl-player-container">
                                    <ReactPlayer width="100%" height="100%" url={video} />
                                </div>
                            )
                            : null
                    }
                    <LaunchDetails currentLaunch={currentLaunch} />
                    <div className="sl-map-container">
                        <GMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            position={{ lat: parseFloat(currentLaunch.pad.latitude), lng: parseFloat(currentLaunch.pad.longitude) }}
                            key={currentLaunch.id}
                            name={currentLaunch.pad.name}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

LaunchPageContent.defaultProps = {
    currentLaunch: {},
};

LaunchPageContent.propTypes = {
    currentLaunch: PropTypes.object,
    upcomingLaunches: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    setCurrentLaunchConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    upcomingLaunches: state.upcomingLaunches,
    currentLaunch: state.currentLaunch,
})

const mapDispatchToState = {
    setCurrentLaunchConnect: setCurrentLaunch,
}

export default connect(mapStateToProps, mapDispatchToState)(LaunchPageContent);