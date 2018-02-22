import React from 'react'
import img1 from '../../assets/tile1.jpg'
import  img2 from '../../assets/materials.jpg'
import './AboutToys.css'

class AboutToys extends React.Component{
  render(){
    var lang=this.props.lang
      return(
        <div>
        <div className="row">
          <div className="col-md-6 at-head">
            <h1>KicaToys</h1>
          </div>
         <div className="col-md-7">
           <p className="at-text">{lang.aT_text1}</p>
         </div>
         <div className="col-md-5 ">
           <img src={img1} alt="img1" className="img-responsive img1"></img>
         </div>
        </div>
          <div className="row">
            <div className="col-md-6">
              </div>
              <div  className="col-md-4 at-head1 align-center">
                <h1>{lang.aT_materials}</h1>
              </div>
           </div>
          <div className="row">
            <div className="col-md-6">
              <img id="at-img2" src={img2} alt="img1" className="img-responsive"></img>
            </div>
            <div className="col-md-6">
              <p>{lang.aT_text2}</p>
            </div>
           </div>
        </div>
    )
  }
}

export default AboutToys
