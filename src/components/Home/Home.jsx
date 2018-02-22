import React from 'react'
import './Home.css'

class Home extends React.Component{
render(){
  var lang=this.props.lang;
  return(
    <div>
      <div className="row home1">
        <div className="col-md-4 home1-text">
          <h1>{lang.homeTextH1}</h1>
          <p>{lang.homeTextP1}</p>
        </div>
       </div>
       <div className="row">
         <div className="col-md-12 newspaper home-text2">
           <h1>{lang.homeTextH1_1}</h1>
           <p>{lang.homeTextMain}</p>
         </div>
       </div>
     </div>
    )
  }
}
export default Home
