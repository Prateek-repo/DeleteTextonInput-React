import React, {Component} from "react";
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText: ""
     
  }

  changeEventListener = (event) => {
    const inputText = event.target.value;
    
    return(
     this.setState(
      {
        inputText:inputText
      }
     ) 
    )
  }

 deleteTextHandler = (index) => {
    const text = this.state.inputText.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    return (
      this.setState({
        
          inputText:updatedText
        
      })
    )
  }

  render(){

    const charList = this.state.inputText.split('').map((ch,index) => {
      return (
        <Char character={ch} key={index} changed={()=> this.deleteTextHandler(index)}/>
      )
    })
    return (
      <div className="App">
        <p>hello hello</p>
        <input type="text" onChange={(event) => this.changeEventListener(event)} value={this.state.inputText}></input>
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
  }
  

export default App;
