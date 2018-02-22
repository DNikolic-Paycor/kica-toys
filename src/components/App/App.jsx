import React from 'react'
import Header from '../Header/Header.jsx'
import Content from '../Content/Content.jsx'
import Social from '../Social/Social.jsx'
import langEN from '../Languages/langEN.json'
import langSR from '../Languages/langSR.json'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
       this.state={
         language:'SR'
        }
        this.langToglle=this.langToglle.bind(this);
      }

langToglle(lang){
  this.setState({language:lang})
}

render() {
  var lang=(this.state.language==='SR')?lang=langSR:lang=langEN;
  
  return(
    <div className="container main">
      <div >
        <button className="langButton" onClick={()=>this.langToglle('EN')}>{this.state.language==='EN'?"ENGLESKI":"ENGLISH"}</button>
        <button className="langButton" onClick={()=>this.langToglle('SR')}>{this.state.language==='SR'?"SRPSKI":"SERBIAN"}</button>
      </div>
        
      <Header language={lang}/>
      <Content language={lang}/>
      <Social language={lang}/>
    </div>
    )
  }
}
export default App
