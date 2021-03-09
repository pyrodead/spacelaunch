import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import jsonMoreLaunches from '../json/dummyMoreLaunches.json';
import { createDateAsUTC, getMoreLaunches } from "../utils/utils";
import {
    incrementLaunchesOffset,
    incrementUpcomingLaunches,
} from "../actions";
import placeholder2 from "../images/placeholder2.png";
import PropTypes from "prop-types";

export const UpcomingLaunchesContent = (props) => {
    const {
        upcomingLaunches,
        incrementUpcomingLaunchesConnect,
        incrementLaunchesOffsetConnect,
        pager,
    } = props;

    const showLoadMoreBtn = upcomingLaunches.results.length < upcomingLaunches.count;

    const handleLoadMore = () => {
        getMoreLaunches(pager.launchesOffset).then((response) => {
            if(response.status >= 200 && response.status < 300) {
                incrementUpcomingLaunchesConnect(response.data);

               if (showLoadMoreBtn) {
                   incrementLaunchesOffsetConnect();
               }
           }

        }).catch(() => {
            incrementUpcomingLaunchesConnect(jsonMoreLaunches);
        });
    }

    return (
        <div className="sl-upcoming-container">
            <div className="sl-title -center">
                Spaceflight Launches
            </div>
            <div className="sl-upcoming-events">
                {
                    upcomingLaunches.results.map((item) => (
                        <div key={item.id} className="event">
                            {
                                item.image_url
                                    ? (
                                        <div className="sl-image-container">
                                            <NavLink to={`/launch/${item.id}`}>
                                                <img src={item.image_url} className="image" alt={item.name} />
                                            </NavLink>
                                        </div>
                                    )
                                    : (
                                        <div className="sl-image-container">
                                            <NavLink to={`/launch/${item.id}`}>
                                                <img src={placeholder2} className="image" alt="placeholder"/>
                                            </NavLink>
                                        </div>)
                            }
                            <div className="sl-events-title -center-offset">
                                <NavLink to={`/launch/${item.id}`} className="sl-link">
                                    <div className="sl-chip -center-offset -gradient">{createDateAsUTC(item.net)}</div>
                                    {item.name}
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="btn-container">
                <button className="sl-btn -small" onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
}
UpcomingLaunchesContent.propTypes = {
    upcomingLaunches: PropTypes.object.isRequired,
    incrementUpcomingLaunchesConnect: PropTypes.func.isRequired,
    incrementLaunchesOffsetConnect: PropTypes.func.isRequired,
    pager: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    upcomingLaunches: state.upcomingLaunches,
    pager: state.pager,
})

const mapDispatchToState = {
    incrementUpcomingLaunchesConnect: incrementUpcomingLaunches,
    incrementLaunchesOffsetConnect: incrementLaunchesOffset,
}

export default connect(mapStateToProps, mapDispatchToState)(UpcomingLaunchesContent);
