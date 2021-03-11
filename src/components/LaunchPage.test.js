import React from "react";
import { shallow } from 'enzyme';
import { LaunchPageContent } from "./LaunchPage";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const upcomingLaunches = {
    results: [
        {
            "id": "test",
            "url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/134eb787-244e-4131-8b03-c9fbd0a11efc/",
            "launch_library_id": null,
            "slug": "https://spacelaunchnow.me/launch/falcon-9-block-5-starlink-20",
            "name": "Falcon 9 Block 5 | Starlink 20",
            "img_url": null,
            "status": {
                "id": 1,
                "name": "Go"
            },
            "net": "2021-03-10T02:58:00Z",
            "window_end": "2021-03-10T02:58:00Z",
            "window_start": "2021-03-10T02:58:00Z",
            "inhold": false,
            "tbdtime": false,
            "tbddate": false,
            "probability": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "rocket": {
                "configuration": {
                    "id": 164,
                    "launch_library_id": 188,
                    "url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/164/",
                    "name": "Falcon 9 Block 5",
                    "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability.",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "launch_service_provider": {
                        "id": 121,
                        "url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/121/",
                        "name": "SpaceX",
                        "featured": true,
                        "type": "Commercial",
                        "country_code": "USA",
                        "abbrev": "SpX",
                        "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.",
                        "administrator": "CEO: Elon Musk",
                        "founding_year": "2002",
                        "launchers": "Falcon",
                        "spacecraft": "Dragon",
                        "launch_library_url": "https://launchlibrary.net/1.4/agency/121",
                        "successful_launches": 117,
                        "failed_launches": 8,
                        "pending_launches": 38,
                        "info_url": "http://www.spacex.com/",
                        "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/spacex_logo_20191121063502.png",
                        "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg",
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_nation/spacex_nation_20190207032501.jpeg"
                    },
                    "variant": "Block 5",
                    "alias": "",
                    "min_stage": 1,
                    "max_stage": 2,
                    "length": 70,
                    "diameter": 3.65,
                    "maiden_flight": "2018-05-11",
                    "launch_mass": 549,
                    "leo_capacity": 22800,
                    "gto_capacity": 8300,
                    "to_thrust": 7607,
                    "apogee": 200,
                    "vehicle_range": null,
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/falcon25209_image_20190224025007.jpeg",
                    "info_url": "http://www.spacex.com/falcon9",
                    "wiki_url": "https://en.wikipedia.org/wiki/Falcon_9"
                },
                "launcher_stage": [
                    {
                        "type": "Core",
                        "reused": null,
                        "launcher_flight_number": 6,
                        "launcher": {
                            "id": 69,
                            "url": "http://spacelaunchnow.me/api/ll/2.2.0/launcher/69/",
                            "details": "Has flown on SpaceX DM-2.",
                            "flight_proven": true,
                            "serial_number": "B1058",
                            "status": "Active",
                            "previous_flights": 5,
                            "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_core_images/69_image_20200602210857.jpeg"
                        },
                        "landing": {
                            "attempt": true,
                            "success": null,
                            "description": "B1058 will attempt to land on ASDS JRTI after its sixth launch.",
                            "location": {
                                "name": "Just Read the Instructions",
                                "abbrev": "JRTI",
                                "description": "The third ASDS barge, Just Read the Instructions (JRTI) is currently used to recover Falcon 9 boosters in the Altantic Ocean. It used to service launches in the Pacific Ocean for launches from Vandenberg AFB. It was first put to use in January of 2016 to attempt to recover a Falcon 9 first-stage booster from the Jason-3 mission which successfully landed but subsequently fell over and experienced an Rapid Unscheduled Disassembly (RUD)."
                            },
                            "type": {
                                "name": "Autonomous Spaceport Drone Ship",
                                "abbrev": "ASDS",
                                "description": "An autonomous spaceport drone ship (ASDS) is an ocean-going vessel derived from a deck barge, outfitted with station-keeping engines and a large landing platform. Construction of such ships was commissioned by aerospace company SpaceX to allow for recovery of rocket first-stages at sea for high-velocity missions which do not carry enough fuel to return to the launch site after lofting spacecraft onto an orbital trajectory."
                            }
                        }
                    }
                ],
                "spacecraft_stage": null
            },
            "mission": {
                "id": 1240,
                "launch_library_id": null,
                "name": "Starlink 20",
                "description": "A batch of 60 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
                "type": "Communications",
                "orbit": "Low Earth Orbit",
                "orbit_abbrev": "LEO"
            },
            "pad": {
                "id": 80,
                "agency_id": 121,
                "name": "Space Launch Complex 40",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
                "map_url": "http://maps.google.com/maps?q=28.56194122,-80.57735736",
                "latitude": "28.56194122",
                "longitude": "-80.57735736",
                "location": {
                    "id": 12,
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA"
                }
            },
            "infoURLs": [],
            "vidURLs": ['https://youtube.com/watch=asdasddas', 'cdn.test.com'],
            "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210218213404.png",
            "infographic_url": null
        }
    ],
};

export const currentLaunch = {
    "id": "test",
    "url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/896d876d-e834-4810-8a5e-44d6b6a42630/",
    "launch_library_id": null,
    "slug": "https://spacelaunchnow.me/launch/falcon-9-block-5-starlink-21",
    "name": "Falcon 9 Block 5 | Starlink 21",
    "img_url": null,
    "status": {
        "id": 2,
        "name": "TBD"
    },
    "net": "2021-03-13T10:06:00Z",
    "window_end": "2021-03-13T10:06:00Z",
    "window_start": "2021-03-13T10:06:00Z",
    "inhold": false,
    "tbdtime": false,
    "tbddate": false,
    "probability": null,
    "holdreason": "",
    "failreason": "",
    "hashtag": null,
    "rocket": {
        "configuration": {
            "id": 164,
            "launch_library_id": 188,
            "url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/164/",
            "name": "Falcon 9 Block 5",
            "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability.",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "launch_service_provider": {
                "id": 121,
                "url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/121/",
                "name": "SpaceX",
                "featured": true,
                "type": "Commercial",
                "country_code": "USA",
                "abbrev": "SpX",
                "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.",
                "administrator": "CEO: Elon Musk",
                "founding_year": "2002",
                "launchers": "Falcon",
                "spacecraft": "Dragon",
                "launch_library_url": "https://launchlibrary.net/1.4/agency/121",
                "successful_launches": 117,
                "failed_launches": 8,
                "pending_launches": 38,
                "info_url": "http://www.spacex.com/",
                "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
                "logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/spacex_logo_20191121063502.png",
                "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg",
                "nation_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_nation/spacex_nation_20190207032501.jpeg"
            },
            "variant": "Block 5",
            "alias": "",
            "min_stage": 1,
            "max_stage": 2,
            "length": 70,
            "diameter": 3.65,
            "maiden_flight": "2018-05-11",
            "launch_mass": 549,
            "leo_capacity": 22800,
            "gto_capacity": 8300,
            "to_thrust": 7607,
            "apogee": 200,
            "vehicle_range": null,
            "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/falcon25209_image_20190224025007.jpeg",
            "info_url": "http://www.spacex.com/falcon9",
            "wiki_url": "https://en.wikipedia.org/wiki/Falcon_9"
        },
        "launcher_stage": [],
        "spacecraft_stage": null
    },
    "mission": {
        "id": 1248,
        "launch_library_id": null,
        "name": "Starlink 21",
        "description": "A batch of 60 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
        "type": "Communications",
        "orbit": "Low Earth Orbit",
        "orbit_abbrev": "LEO"
    },
    "pad": {
        "id": 87,
        "agency_id": null,
        "name": "Launch Complex 39A",
        "info_url": null,
        "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
        "map_url": "http://maps.google.com/maps?q=28.608+N,+80.604+W",
        "latitude": "28.60822681",
        "longitude": "-80.60428186",
        "location": {
            "id": 27,
            "name": "Kennedy Space Center, FL, USA",
            "country_code": "USA"
        }
    },
    "infoURLs": [],
    "vidURLs": ['youtube', 'cdn'],
    "image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210308112429.png",
    "infographic_url": null
};

describe('should render a <LaunchPage />', () => {
    const defaultProps = {
        upcomingLaunches,
        currentLaunch,
        match: { params: { launchId: 'test' } },
        setCurrentLaunchConnect: jest.fn(),
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LaunchPageContent {...defaultProps} />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('should test useEffect', () => {
        const setCurrentLaunchConnectActionCreator = defaultProps.setCurrentLaunchConnect;

        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        wrapper = shallow(<LaunchPageContent {...defaultProps} />);

        expect(setCurrentLaunchConnectActionCreator).toHaveBeenCalled();
    });

    it('should test null return', () => {
        wrapper.setProps({ match: { params: { launchId: '123' } } })

        expect(wrapper.find('.sl-warning')).toHaveLength(1);
    });

    it('should render video container', () => {
        expect(wrapper.find('.sl-player-container')).toHaveLength(1);
    });
});