import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Home/Home.jsx'
import AboutToys from '../AboutToys/AboutToys.jsx'
import ToyMaker from '../ToyMaker/ToyMaker.jsx'
import Toys from '../Toys/Toys.jsx'
import Contact from '../Contact/Contact.jsx'

class Content extends React.Component{
  render(){
    return(
      <div>
        <Route exact path='/' component={()=><Home lang={this.props.language}/>}/>
        <Route path='/aboutToys' component={()=><AboutToys lang={this.props.language}/>}/>
        <Route path='/toyMaker' component={()=><ToyMaker lang={this.props.language}/>}/>
        <Route path='/toys' component={()=><Toys lang={this.props.language}/>}/>
        <Route path='/contact' component={()=><Contact lang={this.props.language}/>}/>
      </div>
    )
  }
}
export default Content
