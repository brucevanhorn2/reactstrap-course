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
                <SiteCarousel data={this.props.data} />
                <VehicleBrowser data={this.props.data} />
            </div>
        );
    }
}

export default Home;