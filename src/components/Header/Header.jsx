import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/kica_logo_final_02.jpg'
import './Header.css'

class Header extends React.Component{
  render(){

var lang=this.props.language

return(
<div>
  <div className="row">
    <div className="col-md-4">
      </div>
    <div className="col-md-4">
      <img className="logo" src={Logo} alt="Logo"/>
      </div>
    <div className="col-md-4">
      </div>
  </div>
  <div className="row border-red">
    <div className="col-md-12" >
      <ul className="nav">
        <li><Link style={{color:'red'}} to='/'>{lang.navHome}</Link></li>
        <li><Link style={{color:'orange'}} to='/aboutToys'>{lang.navAbout}</Link></li>
        <li><Link style={{color:'green'}} to='/toyMaker'>{lang.navToyMaker}</Link></li>
        <li><Link style={{color:'blue'}} to='/toys'>{lang.navToys}</Link></li>
        <li><Link style={{color:'purple'}} to='/contact'>{lang.navContact}</Link></li>
      </ul>
     </div>
   </div>

</div>
            )
          }
        }
export default Header
