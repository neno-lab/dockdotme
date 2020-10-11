import React, {useRef} from 'react';
import Map from './Map';

const MapContainer = () => {
  const mapSection=useRef(null);

   const goToMapSection=()=>{
        window.scrollTo({top: mapSection.current.offsetTop, behavior: 'smooth'});
    };

    const useStyle={
        class:{
            height: '1000px',
            position: 'relative',
        },
    }; 

    return (
        <div className='container' ref={mapSection} style={useStyle.class}>
            <Map/>
        </div>
    )
}

export default MapContainer;