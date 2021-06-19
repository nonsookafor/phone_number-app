import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = { 
    total: ""
  }


  handleClick1 = () => {
    console.log("Clicked 1")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "1-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "1-"})
    }
    else {
      this.setState({total: this.state.total + "1"})
    }
  }

  handleClick2 = () => {
    console.log("Clicked 2")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "2-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "2-"})
    }
    else {
      this.setState({total: this.state.total + "2"})
    }
  }
  

  handleClick3 = () => {
    console.log("Clicked 3")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "3-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "3-"})
    }
    else {
      this.setState({total: this.state.total + "3"})
    }
  }
  

  handleClick4 = () => {
    console.log("Clicked 4")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "4-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "4-"})
    }
    else {
      this.setState({total: this.state.total + "4"})
    }
  }

  handleClick5 = () => {
    console.log("Clicked 5")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "5-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "5-"})
    }
    else {
      this.setState({total: this.state.total + "5"})
    }
  }

  handleClick6 = () => {
    console.log("Clicked 6")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "6-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "6-"})
    }
    else {
      this.setState({total: this.state.total + "6"})
    }
  }

  handleClick7 = () => {
    console.log("Clicked 7")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "7-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "7-"})
    }
    else {
      this.setState({total: this.state.total + "7"})
    }
  }

  handleClick8 = () => {
    console.log("Clicked 8")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "8-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "8-"})
    }
    else {
      this.setState({total: this.state.total + "8"})
    }
  }

  handleClick9 = () => {
    console.log("Clicked 9")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "9-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "9-"})
    }
    else {
      this.setState({total: this.state.total + "9"})
    }
  }

  handleClick10 = () => {
    console.log("Clicked 0")
    if (this.state.total.length === 2) {
      this.setState({total: this.state.total + "0-"})
    }
    else if (this.state.total.length === 6) {
      this.setState({total: this.state.total + "0-"})
    }
    else {
      this.setState({total: this.state.total + "0"})
    }
  }

  handleClick11 = () => {
    console.log("Clicked Restart")
    this.setState({total: ""})
  }

  handleClick12 = () => {
    console.log("Clicked Delete")
    if (this.state.total.length === 4) {
      this.setState({total: this.state.total.slice(0, -2)})
    }
    else if (this.state.total.length === 8) {
      this.setState({total: this.state.total.slice(0, -2)})
    }
    else {
      this.setState({total: this.state.total.slice(0, -1)})
    }
  }

  render() { 
    return (
      <div id="total">
        <div class="btn m-3 btn-secondary" id= "st">
          <h1>Total: {this.state.total}</h1>
        </div>
        <div>
          <button onClick={this.handleClick1} id="first" type="button" class="btn m-3 btn-secondary"><h1>1</h1></button>
          <button onClick={this.handleClick2} id= "second" type="button" class="btn m-3 btn-secondary"><h1>2</h1></button>
          <button onClick={this.handleClick3} id="third" type="button" class="btn m-3 btn-secondary"><h1>3</h1></button>
        </div>
        <div>
          <button onClick={this.handleClick4} id="forth" type="button" class="btn m-3 btn-secondary"><h1>4</h1></button>
          <button onClick={this.handleClick5} id="fifth" type="button" class="btn m-3 btn-secondary"><h1>5</h1></button>
          <button onClick={this.handleClick6} id="sixth" type="button" class="btn m-3 btn-secondary"><h1>6</h1></button>
        </div>
        <div>
          <button onClick={this.handleClick7} id='seventh' type="button" class="btn m-3 btn-secondary"><h1>7</h1></button>
          <button onClick={this.handleClick8} id="eighth" type="button" class="btn m-3 btn-secondary"><h1>8</h1></button>
          <button onClick={this.handleClick9} id="ninth" type="button" class="btn m-3 btn-secondary"><h1>9</h1></button>
        </div>
        <div>
          <button onClick={this.handleClick12} id="twelve" type="button" class="btn m-3 btn-secondary"><h1>Delete</h1></button>
          <button onClick={this.handleClick10} id="tenth" type="button" class="btn m-3 btn-secondary"><h1>0</h1></button>
          <button onClick={this.handleClick11} id="eleventh" type="button" class="btn m-3 btn-secondary"><h1>Restart</h1></button>
        </div>
      </div>
     );
  }
}
 
export default App;