import React, { Component } from 'react';

export class Game extends Component {
    render() {
        return(
            <section>
                <GameField />
                <PlayButton click={this.props.guessNumber}/>  
            </section>
        );
    }
}

const GameField = function() {
    return <input type="text"/>;
}

const PlayButton = function({click}) {
    return <button 
    onClick = {() => click()}
    >GUESS</button>;
}

const Clue = function() {
    return <h3></h3>;
}