import React from 'react'
import myImg from '../../assets/me-black.jpg'
import './ToyMaker.css'

class ToyMaker extends React.Component{
  render(){
    var lang=this.props.lang;
    return(
      <div>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div  className="col-md-6 tm-head">
            <h1>Dragan Nikolić</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 ">
            <img className="me-img" src={myImg} alt="Me"></img>
          </div>
          <div  className="col-md-7 tm-text">
            <p>{lang.tm_text}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ToyMaker
