import React from "react";
import { shallow } from 'enzyme';
import LaunchDetails from "./LaunchDetails";

const currentLaunch = {
    "id": "dff2b6dc-933a-42b4-8d74-db543ada94bb",
    "url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/dff2b6dc-933a-42b4-8d74-db543ada94bb/",
    "launch_library_id": null,
    "slug": "https://spacelaunchnow.me/launch/electron-they-go-up-so-fast",
    "name": "Electron | They Go Up So Fast",
    "img_url": null,
    "status": {
        "id": 2,
        "name": "TBD"
    },
    "net": "2021-03-20T23:00:00Z",
    "window_end": "2021-03-20T23:00:00Z",
    "window_start": "2021-03-20T23:00:00Z",
    "inhold": false,
    "tbdtime": false,
    "tbddate": false,
    "probability": null,
    "holdreason": "",
    "failreason": "",
    "hashtag": null,
    "rocket": {
        "configuration": {
            "id": 26,
            "launch_library_id": 148,
            "url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/26/",
            "name": "Electron",
            "description": "Electron is a two-stage orbital expendable launch vehicle (with an optional third stage) developed by the American aerospace company Rocket Lab. Electron is a small-lift launch vehicle designed to launch small satellites and cubesats to sun-synchronous orbit and low earth orbit. The Electron is the first orbital class rocket to use electric-pump-fed engines, powered by the 9 Rutherford engines on the first stage.",
            "family": "Electron",
            "full_name": "Electron",
            "launch_service_provider": {
                "id": 147,
                "url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/147/",
                "name": "Rocket Lab Ltd",
                "featured": true,
                "type": "Commercial",
                "country_code": "USA",
                "abbrev": "RL",
                "description": "Rocket Lab is an American aerospace manufacturer with a wholly owned New Zealand subsidiary. The company develops lightweight, cost-effective commercial rocket launch services. The Electron Program was founded on the premise that small payloads such as CubeSats require dedicated small launch vehicles and flexibility not currently offered by traditional rocket systems. Its rocket, the Electron, is a light-weight rocket and is now operating commercially. Electron currently launches from only  Mahia Peninsula in New Zealand however they are currently looking into developing a facility in the US.",
                "administrator": "CEO: Peter Beck",
                "founding_year": "2006",
                "launchers": "Electron",
                "spacecraft": "",
                "launch_library_url": "https://launchlibrary.net/1.4/agency/147",
                "successful_launches": 16,
                "failed_launches": 2,
                "pending_launches": 6,
                "info_url": "http://www.rocketlabusa.com/",
                "wiki_url": "http://en.wikipedia.org/wiki/Rocket_Lab",
                "logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/rocket2520lab2520ltd_logo_20190207032456.png",
                "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_images/rocket2520lab2520ltd_image_20190207032456.jpeg",
                "nation_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_nation/rocket2520lab2520ltd_nation_20190207032456.png"
            },
            "variant": "",
            "alias": "",
            "min_stage": 2,
            "max_stage": 3,
            "length": 18,
            "diameter": 1.2,
            "maiden_flight": "2017-05-25",
            "launch_mass": 13,
            "leo_capacity": 300,
            "gto_capacity": null,
            "to_thrust": 162,
            "apogee": null,
            "vehicle_range": null,
            "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/electron_image_20190705175640.jpeg",
            "info_url": "https://www.rocketlabusa.com/electron/",
            "wiki_url": "https://en.wikipedia.org/wiki/Electron_\\(rocket\\)"
        },
        "launcher_stage": [],
        "spacecraft_stage": null
    },
    "mission": {
        "id": 1242,
        "launch_library_id": null,
        "name": "They Go Up So Fast",
        "description": "The Electron rocket will carry seven satellites to low Earth orbit: one Earth-observation satellite for BlackSky, two Internet-Of-Things (IoT) nanosatellites for companies Fleet Space and Myriota, a technology demonstration satellite for the University of New South Wales (UNSW) Canberra Space, a weather satellite pathfinder technology demonstration from Care Weather technologies, a technology demonstrator for the U.S. Army’s Space and Missile Defense Command as well as Rocket Lab’s in-house designed and built Photon Pathstone spacecraft which will operate on orbit as a risk reduction demonstration to build spacecraft heritage ahead of Rocket Lab’s mission to the Moon for NASA later this year.",
        "type": "Dedicated Rideshare",
        "orbit": "Sun-Synchronous Orbit",
        "orbit_abbrev": "SSO"
    },
    "pad": {
        "id": 65,
        "agency_id": 147,
        "name": "Rocket Lab Launch Complex 1A",
        "info_url": null,
        "wiki_url": "https://en.wikipedia.org/wiki/Rocket_Lab_Launch_Complex_1",
        "map_url": "https://www.google.com/maps/place/-39.262833,177.864469",
        "latitude": "-39.262833",
        "longitude": "177.864469",
        "location": {
            "id": 10,
            "name": "Onenui Station, Mahia Peninsula, New Zealand",
            "country_code": "NZL"
        }
    },
    "infoURLs": [],
    "vidURLs": [],
    "image_url": null,
    "infographic_url": null
};

describe('should render a <LaunchDetails />', () => {
    const defaultProps = {
        currentLaunch,
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LaunchDetails {...defaultProps} />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});