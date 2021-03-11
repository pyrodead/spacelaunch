import Countdown from "react-countdown";

const Timer = (props) => {
    const { date } = props;

    const Completion = () => <div className="sl-launch-completed">Already Launched!!!</div>;

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
        <Countdown date={date} renderer={renderer} />
    );
}

export default Timer;