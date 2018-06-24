import React from 'react';
import './SiteCarousel.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Collapse } from 'reactstrap';

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
  
class SiteCarousel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0
          };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
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

      render(){
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

      return(<Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>);
      }
}

export default SiteCarousel;
