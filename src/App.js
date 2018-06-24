import React, { Component } from 'react';
import './App.css';
import SiteCarousel from './components/SiteCarousel';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  const items = [
    {
      src: '/images/carousel/jumper-01.png',
      altText: '2018 Jumper J-1',
      caption: '2018 Jumper J-1'
    },
    {
      src: '/images/carousel/air-bike-01.png',
      altText: '2018 AirBike',
      caption: '2018 AirBike'
    },
    {
      src: '/images/carousel/spidi-01.png',
      altText: '2018 Spidi - Your Ultimate Getaway Car',
      caption: '2018 Spidi'
    },
    {
      src: '/images/carousel/mercury-01.png',
      altText: 'Mercury Spacefaring Commercial Transport',
      caption: 'Mercurty Spacefaring Commercial Transport'
    }
  ];

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeIndex: 0
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand className="Branding" href="/">flying car dealership</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <i class="fas fa-space-shuttle"></i> Select a Vehicle
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Jumper
                  </DropdownItem>
                  <DropdownItem>
                    Spidi GT
                  </DropdownItem>
                  
                  <DropdownItem>
                    Air Bike
                  </DropdownItem>
                  <DropdownItem>
                    Mercury
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/find-a-dealer/"><i class="fas fa-map-marker-alt"></i> Find a Dealer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/build-and-price/"><i class="fas fa-cogs"></i> Build & Price</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <SiteCarousel />
      
      </div>
    );
  }
}

export default App;
