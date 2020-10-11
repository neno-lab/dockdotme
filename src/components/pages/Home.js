import React from 'react';
import Content from '../../views/Index/Content';
import MapContainer from '../Map/MapContainer';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Content/>
            <MapContainer/>
            <Footer/>
        </div>
    )
}

export default Home;
