import React, { Component } from 'react';
import './App.css';
import { Game } from './Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: ' ',
      winningNumber: this.getRandomInt(11),
    }

    //this.getRandomInt = this.getRandomInt.bind(this);
    //this.guessNumber = this.guessNumber.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random()*max);
  }

  guessNumber() {
    if(this.state.currentNumber == this.state.winningNumber) {
      alert("YOU WIN");
    }

    else {
      alert("THATS THE WRONG NUMBER");
    }
  }

  render() {
    return (
      <div className="App">
        <Game 
        guessNumber = {this.guessNumber}/>
      </div>
    );
  }
}

export default App;
