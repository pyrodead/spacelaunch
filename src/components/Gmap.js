import { useState } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

const GMap = (props) => {
    const[info, setInfo] = useState(null)

    return (
        <GoogleMap
            defaultCenter={{ lat:40.712776, lng:-74.005974 }}
            defaultZoom={11}
            center={props.position}
        >
            <Marker
                key={props.key}
                position={props.position}
                onClick={() => setInfo(1)}
            />

            {
                info
                    ? (
                        <InfoWindow
                            position={props.position}
                            onCloseClick={() => setInfo(null)}

                        >
                            <div style={{color: 'black'}}>
                                {props.name}
                            </div>
                        </InfoWindow>
                    )
                    : null
            }

        </GoogleMap>
    )
}

export default withScriptjs(withGoogleMap(GMap));