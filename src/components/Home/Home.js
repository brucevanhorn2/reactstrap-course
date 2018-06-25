import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VehicleBrowser';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SiteCarousel />
                <VehicleBrowser /> 
            </div>);
    }
}

export default Home;