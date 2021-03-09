import { connect } from 'react-redux';
import Countdown from "react-countdown";
import { NavLink } from 'react-router-dom';

export const HeaderContent = (props) => {
    const {
        title,
        subtitle,
        isHomePage,
        timer,
        currentLaunch,
    } = props;
    const date = timer ? new Date(currentLaunch.net) : null;

    const Completion = () => <span>LAUNCH!!!</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        const formatted = [days, hours, minutes, seconds].map((item) => item.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        }));

        if (completed) {
            // Render a complete state
            return <Completion />;
        } else {
            // Render a countdown
            return (
                <div className="sl-timer">
                    <span className="time">
                        {formatted.join(' : ')}
                    </span>
                </div>
            );
        }
    };

    return (
        <header className="sl-header">
            <div className="sl-content-wrapper">
                <div className="sl-header-content">
                    { isHomePage ? null : <NavLink to={'/'} className="sl-nav-btn">Back to Home</NavLink>}
                    <div className={`sl-logo${timer ? ' -right' : ''}`} />
                    <div className={`title${isHomePage ? '' : ' -center'}`}>
                        {title}
                    </div>
                    <div className={`sl-subtitle${subtitle ? '' : ' -non-home'}`}>
                        {subtitle ? subtitle : 'Go for Launch'}
                    </div>
                    {
                        isHomePage
                            ? (
                                <button className="sl-btn">
                                    Show All Launches
                                </button>
                            )
                            : null
                    }
                    {
                        timer
                            ? (
                                <Countdown date={date} renderer={renderer} />
                            )
                            : null
                    }
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    currentLaunch: state.currentLaunch,
});

export default connect(mapStateToProps)(HeaderContent);