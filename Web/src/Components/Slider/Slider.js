import React, {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
    {
      src:'https://cdn.shopify.com/s/files/1/1974/9033/files/KLCC_ALL_IT_Hypermarket_-_entrance_1.jpg?18325763145260754011',
      altText: 'Online Sopping Store',
      caption: 'Online Sopping Store'
    },
    {
      src:'https://i2.wp.com/www.glamtush.com/wp-content/uploads/2018/06/computer-accessories.png?resize=660%2C365&ssl=1',
      altText: 'You can Buy easily',
      caption: 'You can Buy easily'
    },
    {
      src:'https://cdn.shopify.com/s/files/1/1974/9033/files/KLCC_laptop.jpg?18325763145260754011',
      altText: '20 %OFF',
      caption: '20 %OFF'
    }
  ];
  
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
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
    render() {
    
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem className='slider'
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              < img src={item.src} alt={item.altText} className='slider'/>
              <CarouselCaption 
              // captionText={item.caption} 
              captionHeader={<h1 style={{color:'blue',fontWeight:'bolder'}}><i>{item.caption}</i></h1>

            }
               />
            </CarouselItem>
          );
        });
    
        return (
          <Carousel className='slider'
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
           
            </Carousel>

        );
  }
}

export default Slider;
