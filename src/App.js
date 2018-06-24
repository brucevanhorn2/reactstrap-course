import React, { Component } from 'react';
import './App.css';
import SiteCarousel from './components/SiteCarousel';
import TopNav from './components/TopNav';
import VehicleBrowser from './components/VehicleBrowser';

const VehicleData = [
  {
    model:  "Jumper J-1",
    tagline: 'Commuting Convenience',
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant'],
    carouselImage: '/images/carousel/jumper-01.png',
    altText: '2018 Jumper J-1',
    caption: '2018 Jumper J-1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.',
    detailUrl: '/jumper/',
    msrp: 36000
  },{
    model:  "Spidi GT",
    tagline: 'Your Ultimate Getaway Car',
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant', 'Blue Nebula', 'Solar Yellow'],
    carouselImage: '/images/carousel/spidi-01.png',
    altText: '2018 Spidi - Your Ultimate Getaway Car',
    caption: '2018 Spidi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.',
    detailUrl: '/spidi/',
    msrp: 42000
  },{
    model:  "AirBike",
    tagline: "New Perspective on Fun",
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant', 'Black Hole'],
    carouselImage: '/images/carousel/air-bike-01.png',
    altText: '2018 AirBike',
    caption: '2018 AirBike',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.',
    detailUrl: '/airbike/',
    msrp: 18500
  },{
    model:  "Mercury",
    tagline: "Professional Grade Affordable Fleets.",
    modelYear: "2018",
    colors: ['White Dwarf'],
    carouselImage: '/images/carousel/mercury-01.png',
    altText: 'Mercury Spacefaring Commercial Transport',
    caption: 'Mercurty Spacefaring Commercial Transport',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.',
    detailUrl: '/mercury/',
    msrp: 167000
  }
]
class App extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="App">
        <TopNav data={VehicleData} />
        <SiteCarousel data={VehicleData} />
        <VehicleBrowser data={VehicleData} />
      </div>
    );
  }
}

export default App;
