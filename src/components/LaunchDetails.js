const LaunchDetails = (props) => {
    const {
        currentLaunch
    } = props;

    const missionName = currentLaunch.mission?.name;
    const missionOrbit = currentLaunch.mission?.orbit;
    const padName = currentLaunch.pad?.name;
    const probability = currentLaunch.probability;
    const location = currentLaunch.pad?.location?.name;
    const missionDescription = currentLaunch.mission?.description;
    const rocketFamily = currentLaunch.rocket?.configuration?.family;
    const rocketVariant = currentLaunch.rocket?.configuration?.variant;
    const rocketDescription = currentLaunch.rocket?.configuration?.description;

    return (
      <>
          <div className="sl-title -center">Overview</div>
          <div className="sl-mission-details">
              <div className="mission-overview">
                  {missionName && <div className="detail">Mission: {missionName}</div>}
                  {missionOrbit && <div className="detail">Destination: {missionOrbit}</div>}
              </div>
              <div className="mission-features">
                  {padName && <div className="sl-chip -features -gradient">{padName}</div>}
                  {missionOrbit && <div className="sl-chip -features -gradient">{missionOrbit}</div>}
                  {probability && <div className="sl-chip -features -gradient">Probability: {probability}</div>}
                  {location && <><br /><div className="sl-chip -features -last-feature">{location}</div></>}
              </div>
              <div className="mission-description">
                  <div className="sl-subtitle -center">
                      {missionDescription}
                  </div>
              </div>
              <div className="rocket-overview">
                  <div className="sl-title -center">{currentLaunch.rocket?.configuration?.name}</div>
                  {rocketFamily && <div className="detail">Family: {rocketFamily}</div>}
                  {rocketVariant && <div className="detail">Variant: {rocketVariant}</div>}
                  {rocketDescription && <div className="sl-subtitle -center -indent-top">{rocketDescription}</div>}
                  <button className="sl-btn -indent-top">See Rocket Details</button>
              </div>
          </div>
      </>
    );
}

export default LaunchDetails;