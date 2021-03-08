import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { setCurrentLaunch } from "../actions";
import ReactPlayer from 'react-player';

const LaunchPage = (props) => {
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
        return null;
    }

    const video = currentLaunch.vidURLs.find(a =>a.includes("youtube"));

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultLoc = {
        center: {
            lat: 13.7199,
            lng: 80.2304
        },
        zoom: 11
    };

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
                        {currentLaunch.pad?.name && <div className="sl-date -features -gradient">{currentLaunch.pad.name}</div>}
                        {currentLaunch.mission?.orbit && <div className="sl-date -features -gradient">{currentLaunch.mission.orbit}</div>}
                        {currentLaunch.probability && <div className="sl-date -features -gradient">Probability: {currentLaunch.probability}</div>}
                        {currentLaunch.pad?.location?.name && <><br /><div className="sl-date -features -last-feature">{currentLaunch.pad.location.name}</div></>}
                        <div className="sl-subtitle -center -indent-bottom">
                            {currentLaunch.mission?.description}
                        </div>
                        <div className="sl-title -center">{currentLaunch.rocket.configuration.name}</div>
                        {currentLaunch.rocket?.configuration?.family && <div className="detail">Family: {currentLaunch.rocket.configuration.family}</div>}
                        {currentLaunch.rocket?.configuration?.variant && <div className="detail">Variant: {currentLaunch.rocket.configuration.variant}</div>}
                        <div className="sl-subtitle -center -indent-top">
                            {currentLaunch.rocket.configuration.description}
                        </div>
                        <button className="sl-btn">See Rocket Details</button>
                        <div style={{ height: '50vh', width: '100%' }} className="sl-map-container">
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

const mapStateToProps = (state) => ({
    upcomingLaunches: state.upcomingLaunches,
    currentLaunch: state.currentLaunch,
})

const mapDispatchToState = {
    setCurrentLaunchConnect: setCurrentLaunch,
}

export default connect(mapStateToProps, mapDispatchToState)(LaunchPage);