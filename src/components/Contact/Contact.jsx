import React from 'react'
import './Contact.css'
class Contact extends React.Component{
  render(){
    var lang=this.props.lang
      return(
        <div className="row">
          <div className="col-md-1">
          </div>
          <div  id="co-head" className="col-md-5">
            <h1>{lang.contact}</h1>
              <p id="co-text">{lang.contact_text}</p>
          </div>
          <div className="col-md-5">
            <form action="https://formspree.io/kicaubuntu@gmail.com" method="POST">
              <label>{lang.contact_name}</label>
              <input type="text" name="ime" required></input>
              <label>{lang.contact_email}</label>
              <input type="email" name="_replyto" required></input>
              <label>{lang.contact_message}</label>
              <textarea name="poruka" rows="8" cols="50" style={{resize:'none'}} placeholder={`${lang.contact_placeholder}`} required></textarea>
              <input id="submit" type="submit" value={`${lang.contact_button}`}></input>
            </form>
          </div>
         </div>
    )
  }
}
export default Contact
