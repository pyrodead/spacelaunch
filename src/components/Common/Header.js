import { connect } from 'react-redux';
import Timer from '../Timer';
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

    return (
        <header className={`sl-header${isHomePage ? ' -homepage' : ''}`}>
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
                                <button className="sl-btn -indent-top">
                                    Show All Launches
                                </button>
                            )
                            : null
                    }
                    {
                        timer
                            ? (
                                <Timer date={date} />
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