import React from 'react'
import Collection2 from '../../assets/img3.jpg'
import BlueCar from '../../assets/BlueCar.jpg'
import RedCar from '../../assets/RedCar.jpg'
import YellowCar from '../../assets/YellowCar.jpg'
import GreenCar from '../../assets/GreenCar.jpg'
import {Carousel} from 'react-bootstrap'
import './Slide.css'

class Slide2 extends React.Component{
  render(){
    var lang=this.props.lang;
    return(
      <div>
      <Carousel>
        <Carousel.Item>
          <img  alt="Colection" src={Collection2} />
            <Carousel.Caption className="color-blue">
              <h3>{lang.toys_RetroSlideHead}</h3>
                <p>{lang.toys_RetroSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img  alt="RedCar" src={RedCar} />
            <Carousel.Caption className="color-orange">
              <h3>{lang.toys_RetroSlideHead}</h3>
                <p>{lang.toys_RetroSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img  alt="BlueCar" src={BlueCar} />
            <Carousel.Caption className="color-red">
              <h3>{lang.toys_RetroSlideHead}</h3>
                <p>{lang.toys_RetroSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img  alt="YellowCar" src={YellowCar} />
            <Carousel.Caption className="color-green">
              <h3>{lang.toys_RetroSlideHead}</h3>
                  <p>{lang.toys_RetroSlideText}</p>
                  </Carousel.Caption>
                  </Carousel.Item>
        <Carousel.Item>
          <img  alt="GreenCar" src={GreenCar} />
            <Carousel.Caption className="color-yellow">
              <h3>{lang.toys_RetroSlideHead}</h3>
                <p>{lang.toys_RetroSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
    </Carousel>
</div>
  )
 }
}
export default Slide2
