import { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import PropTypes from "prop-types";
import { LaunchPageContent } from "./LaunchPage";

const Shifter = (props) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 420, itemsToShow: 2,},
        { width: 1024, itemsToShow: 3 },
    ];
    const ref = useRef(null);

    return (
        <>
            <div className="sl-arrows-container">
                <span onClick={() => ref.current.slidePrev()} className="arrow -left" />
                <span onClick={() => ref.current.slideNext()} className="arrow -right" />
            </div>
            <Carousel
                ref={ref}
                initialActiveIndex={0}
                breakPoints={breakPoints}
                itemsToScroll={1}
                focusOnSelect={true}
                itemPadding={[0, 10]}
                showArrows={false}
            >
                {props.children}
            </Carousel>
        </>
    )
}

Shifter.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Shifter;