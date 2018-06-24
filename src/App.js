import React, { Component } from 'react';
import './App.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
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

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
      const { activeIndex } = this.state;
      const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
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
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      
      </div>
    );
  }
}

export default App;
