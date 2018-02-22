import React from 'react'
import TeleIcon from 'react-icons/lib/fa/phone-square'
import MailIcon from 'react-icons/lib/fa/envelope'
import FbIcon from 'react-icons/lib/fa/facebook-square'
import './Social.css'

class Social extends React.Component{
  render(){
    var lang=this.props.language
    return(
      <div  className="row social">
        <div className="col-md-4">
          <h3>{lang.social_contacts}</h3>
          <p><span><TeleIcon/>Tel:+381 61 63787 40</span></p>
          <p><span><MailIcon/>Email:kicaubuntu@gmail.com</span></p>
        </div>
        <div className="col-md-4">
          <h3>{lang.social_social}</h3>
          <p className="social-style"><span><a href="https://www.facebook.com/kicatoys/" ><FbIcon/>KicaToys</a></span></p>
        </div>
        <div className="col-md-4">
          <h3>{lang.social_links}</h3>
          <p className="social-style"><a href="https://sh.wikipedia.org/wiki/Ekolo%C5%A1ka_svest">Wiki</a></p>
        </div>
       </div>
    )
  }
}
export default Social
