import React from 'react'
import Slide1 from '../Slide/Slide1.jsx'
import Slide2 from '../Slide/Slide2.jsx'
import './Toys.css'

class Toys extends React.Component{
  render(){
    var lang=this.props.lang;
    return(
      <div>
        <div className="row">
          <div className="col-md-6 slide-text slide1-head" >
            <h1>{lang.toys_LilFinger}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-8">
            <Slide1 lang={lang}/>
          </div>
          <div className="col-md-2 slide1-text">
            <p>{lang.toys_LilFingerText}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 slide2-head">
            <h1>{lang.toys_Retro}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 slide2-text">
            <p>{lang.toys_RetroText}</p>
          </div>
          <div className="col-md-8">
            <Slide2 lang={lang}/>
          </div>
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.toys_moreText}</h1>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default Toys
