import { connect } from "react-redux";
import { createDateAsUTC } from "../utils/utils";
import placeholder from "../images/placeholder1.png";
import Shifter from './Shifter';
import PropTypes from "prop-types";

export const UpcomingEventsContent = (props) => {
    const { upcomingEvents } = props;

    return (
        <div className="sl-shifter-container">
            <div className="sl-title -left -indent-left">Upcoming Events</div>
            <Shifter>
                {
                    upcomingEvents.results.map((item) => (
                        <div key={item.id} className="sl-shifter-item">
                            {item.feature_image  ? <div className="sl-image-container"><img src={item.feature_image} className="image" alt={item.name} draggable="false" /></div> : <div className="sl-image-container"><img src={placeholder} className="image" alt="placeholder" draggable="false"/>}</div>}
                            <div className="sl-chip">{createDateAsUTC(item.date)}</div>
                            <div className="sl-events-title">{item.name}</div>
                        </div>
                    ))
                }
            </Shifter>
        </div>
    );
}

UpcomingEventsContent.propTypes = {
    upcomingEvents: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    upcomingEvents: state.upcomingEvents,
})

export default connect(mapStateToProps)(UpcomingEventsContent);