import React from 'react'
import Collection1 from '../../assets/img2.jpg'
import BlueBus from '../../assets/BlueBus.jpg'
import RedCar1 from '../../assets/RedCar1.jpg'
import YellowTruck from '../../assets/YelowTruck.jpg'
import {Carousel} from 'react-bootstrap'
import './Slide.css'

class Slide1 extends React.Component{
  render(){
    var lang=this.props.lang;
    return(
      <div>
      <Carousel>
        <Carousel.Item>
          <img alt="Colection" src={Collection1} />
            <Carousel.Caption className="color-red">
              <h3>{lang.toys_LilFingerSlideHead}</h3>
                <p>{lang.toys_LilFingerSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img alt="RedCar1" src={RedCar1} />
            <Carousel.Caption className="color-green">
              <h3>{lang.toys_LilFingerSlideHead}</h3>
                <p>{lang.toys_LilFingerSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img  alt="Bus" src={BlueBus} />
            <Carousel.Caption className="color-yellow">>
              <h3>{lang.toys_LilFingerSlideHead}</h3>
                <p>{lang.toys_LilFingerSlideText}</p>
                  </Carousel.Caption>
                    </Carousel.Item>
        <Carousel.Item>
          <img  alt="Truck" src={YellowTruck} />
            <Carousel.Caption className="color-blue">
              <h3>{lang.toys_LilFingerSlideHead}</h3>
                <p>{lang.toys_LilFingerSlideText}</p>
                  </Carousel.Caption>
                  </Carousel.Item>
    </Carousel>
</div>
  )
 }
}
export default Slide1
