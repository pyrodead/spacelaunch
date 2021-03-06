import { connect } from 'react-redux';
import { createDateAsUTC, getNumberOfSlides } from '../utils/utils';
import { useMediaQuery } from "@material-ui/core";
import placeholder from '../images/placeholder1.png'

const Launches = (props) => {
    const { recentLaunches: { results } } = props;
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isMobileMedium =  useMediaQuery('(min-width:420px)');
    const slidesQuantity = getNumberOfSlides(isMobileMedium, isDesktop);

    return (
        <>
            <header className="sl-header">
               <div className="logo" />
               <div className="sl-content-wrapper">
                   <div className="sl-header-content">
                       <div className="title">
                           Upcoming Spaceflight Launches
                       </div>
                       <div className="subtitle">
                           View all launches available - including launches from the past and utilize powerful search filters.
                       </div>
                       <button className="header-btn">
                           Show All Launches
                       </button>
                   </div>
               </div>
            </header>
            <main className="sl-content-wrapper">
                <div className="sl-main-content">
                    <div className="sl-shifter-container">
                        <div className="sl-title -left">Recent Events</div>
                        <div className="sl-arrows-container">
                            <span className="arrow -left" />
                            <span className="arrow -right" />
                        </div>
                        <ul className="sl-shifter">
                            {
                                results.slice(0, slidesQuantity).map((item) => (
                                    <li key={item.id} className="sl-shifter-item">
                                        {item.img_url  ? <img src={item.img_url} className="image" alt={item.name} /> : <img src={placeholder} className="image" alt="placeholder"/>}
                                        <div className="sl-date">{createDateAsUTC(item.net)}</div>
                                        <div className="title">{item.name}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="sl-upcoming-events">
                        <div className="sl-title -center">
                            Spaceflight Launches
                        </div>

                    </div>
                </div>
            </main>
            <footer className="sl-footer">
                FOOTER
            </footer>
        </>
    )

}

const mapStateToProps = (state) => ({
    recentLaunches: state.recentLaunches,
})

export default connect(mapStateToProps)(Launches);