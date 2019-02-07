import React, { Component } from 'react';

export class Game extends Component {
    render() {
        return(
            <section>
                <Display />
            </section>
        );
    }
}

const Display = function() {
    return <input type="text"/>;
}