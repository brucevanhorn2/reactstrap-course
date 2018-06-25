import React from 'react';
import './Home.css';
import data from '../../VehicleData.json'
import SiteCarousel from '../SiteCarousel';

//import VehicleBrowser from '../VehicleBrowser';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SiteCarousel />
            </div>);
    }
}

export default Home;