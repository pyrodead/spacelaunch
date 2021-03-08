import { connect } from "react-redux";
import {createDateAsUTC, getNumberOfSlides} from "../utils/utils";
import placeholder from "../images/placeholder1.png";
import { useMediaQuery } from "@material-ui/core";

const UpcomingEvents = (props) => {
    const { upcomingEvents } = props;
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isMobileMedium =  useMediaQuery('(min-width:420px)');
    const slidesQuantity = getNumberOfSlides(isMobileMedium, isDesktop);

    return (
        <div className="sl-shifter-container">
            <div className="sl-title -left">Upcoming Events</div>
            <div className="sl-arrows-container">
                <span className="arrow -left" />
                <span className="arrow -right" />
            </div>
            <ul className="sl-shifter">
                {
                    upcomingEvents.results.slice(0, slidesQuantity).map((item) => (
                        <li key={item.id} className="sl-shifter-item">
                            {item.feature_image  ? <div className="sl-image-container"><img src={item.feature_image} className="image" alt={item.name} /></div> : <div className="sl-image-container"><img src={placeholder} className="image" alt="placeholder"/>}</div>}
                            <div className="sl-date">{createDateAsUTC(item.date)}</div>
                            <div className="sl-events-title">{item.name}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    upcomingEvents: state.upcomingEvents,
})

export default connect(mapStateToProps)(UpcomingEvents);