import React, { useEffect, useRef, ReactElement, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({center, zoom, }: {center: google.maps.LatLngLiteral; zoom: number; }) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div 
        ref={ref} 
        id="map" 
        style = {
            {
                height: "350px"
            }
        }
    />;
}



const Gmap = () => {
    const [zoom, setZoom] = useState(10)
    const [center, setCenter] = useState({ lat: 21.027523000835675, lng: 105.83413329445226 })

    useEffect(()=>{
        setZoom(15)
    }
    ,[])


    const handleZoomChange = (event) => {
        setZoom(parseInt(event.target.value))
        setCenter({ lat: 21.027523000835675, lng: 105.83413329445226 })
    }

    return ( 
        <>
        <div className="w3-content w3-padding-32">
            <h2>Gmap</h2>
            <hr/>
            <div className="col-container row-fix-margin filter w3-margin-bottom w3-no-padding">
                <div className="w3-col">
                    <div className="w3-padding">
                        <label>Map Zoom</label>
                        <input  
                            value={zoom}
                            onChange={handleZoomChange}
                            type="number" 
                            className="w3-input w3-border"
                            min="0"
                            max="15"
                        />
                    </div>
                </div>
            </div>
            <Wrapper apiKey="" render={render}>
                <MyMapComponent center={center} zoom={zoom} />
            </Wrapper>
        </div>
        </>
    )
}


export default Gmap