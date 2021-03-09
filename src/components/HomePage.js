import Footer from './Common/Footer';
import Header from './Common/Header';
import UpcomingLaunches from "./UpcomingLaunches";
import UpcomingEvents from "./UpcomingEvents";

const HomePage = () => (
    <>
        <Header
            title="Upcoming Spaceflight Launches"
            subtitle="View all launches available - including launches from the past and utilize powerful search filters."
            isHomePage
        />
        <main className="sl-content-wrapper" id="scrollfix">
            <div className="sl-main-content">
                <UpcomingEvents />
                <UpcomingLaunches />
            </div>
        </main>
        <Footer />
    </>
);

export default HomePage;