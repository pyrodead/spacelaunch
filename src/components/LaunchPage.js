import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { setCurrentLaunch } from "../actions";
import ReactPlayer from 'react-player';
import GMap from "./Gmap";
import PropTypes from "prop-types";

export const LaunchPageContent = (props) => {
    const {
        currentLaunch,
        match: { params: { launchId } },
    } = props;

    useEffect(() => {
        const {
            upcomingLaunches,
            match: { params: { launchId } },
            setCurrentLaunchConnect,
        } = props;

        if(launchId) {
            const currentLaunch = upcomingLaunches.results.filter((item) => item.id === launchId);
            setCurrentLaunchConnect(currentLaunch[0]);
        }
    });

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
                    <div className="sl-title -center">Overview</div>
                    <div className="sl-mission-details">
                        {currentLaunch.mission?.name && <div className="detail">Mission: {currentLaunch.mission.name}</div>}
                        {currentLaunch.mission?.orbit && <div className="detail -indent-bottom">Destination: {currentLaunch.mission.orbit}</div>}
                        {currentLaunch.pad?.name && <div className="sl-chip -features -gradient">{currentLaunch.pad.name}</div>}
                        {currentLaunch.mission?.orbit && <div className="sl-chip -features -gradient">{currentLaunch.mission.orbit}</div>}
                        {currentLaunch.probability && <div className="sl-chip -features -gradient">Probability: {currentLaunch.probability}</div>}
                        {currentLaunch.pad?.location?.name && <><br /><div className="sl-chip -features -last-feature">{currentLaunch.pad.location.name}</div></>}
                        <div className="sl-subtitle -center -indent-bottom">
                            {currentLaunch.mission?.description}
                        </div>
                        <div className="sl-title -center">{currentLaunch.rocket?.configuration?.name}</div>
                        {currentLaunch.rocket?.configuration?.family && <div className="detail">Family: {currentLaunch.rocket.configuration.family}</div>}
                        {currentLaunch.rocket?.configuration?.variant && <div className="detail">Variant: {currentLaunch.rocket.configuration.variant}</div>}
                        <div className="sl-subtitle -center -indent-top">
                            {currentLaunch.rocket.configuration.description}
                        </div>
                        <button className="sl-btn">See Rocket Details</button>
                    </div>
                    <div className="sl-map-container">
                        <GMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBKAjp4GhQCnIpDfDUGWDLinkvQYPcvI9w&v=3.exp&libraries=geometry,drawing,places`}
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