import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { setCurrentLaunch } from "../actions";
import ReactPlayer from 'react-player';
import GoogleMapReact from 'google-map-react';

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
                <div className="sl-main-content">
                    {
                        currentLaunch.vidURLs.length
                            ? (
                                <div className="sl-player-container">
                                    <ReactPlayer url={video} />
                                </div>
                            )
                            : null
                    }
                    <div className="sl-title -center">Overview</div>
                    <div className="sl-mission-details">
                        <span>Mission: {currentLaunch.mission.name}</span><br />
                        <span>Destination: {currentLaunch.mission.orbit}</span>
                        <div>
                            <div className="sl-date -features -gradient">{currentLaunch.pad?.name}</div>
                            <div className="sl-date -features -gradient">{currentLaunch.mission?.orbit}</div>
                            <div className="sl-date -features -gradient">Probability: {currentLaunch.probability}</div><br />
                            <div className="sl-date -features">{currentLaunch.pad?.location?.name}</div>
                            <div className="sl-subtitle -center">
                                {currentLaunch.mission?.description}
                            </div>
                        </div>
                        <div className="sl-title -center">{currentLaunch.rocket.configuration.name}</div>
                        <span>Family: {currentLaunch.rocket.configuration.family}</span><br />
                        <span>Variant: {currentLaunch.rocket.configuration.variant}</span>
                        <div className="sl-subtitle -center">
                            {currentLaunch.rocket.configuration.description}
                        </div>
                        <button className="sl-btn">See Rocket Details</button>
                        <div style={{ height: '50vh', width: '100%' }} className="sl-map-container">
                            <GoogleMapReact
                                defaultCenter={defaultLoc. center}
                                defaultZoom={defaultLoc.zoom}
                            >
                                <AnyReactComponent
                                    text="Marker"
                                    lat={13.7199}
                                    lng={80.2304}
                                />
                            </GoogleMapReact>
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