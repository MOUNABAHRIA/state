
import './App.css';
import React from 'react';
import image from "./img/image.jpg"
class App extends  React.Component{
  state ={
    fullName:"Mouna", bio: "", imagsrc:image, show:false};
  
  render(){
    const handleShow = ()=>{this.setState({show:!this.state.show})};
  return (
    <div>
    <button onClick= {handleShow}>
      {this.state.show?"hide":"show"}
    </button>
    {this.state.show?
      <div>
        <Life/>
        <h1>{this.state.fullName}</h1>
        <img src={this.state.imagsrc} alt="pic&"/>
      </div> :"click me"}
      
    </div>
    
  );}
  
}

export default App;
