import React, { Component } from 'react';
import OnePlayerBoard from './OnePlayerBoard';
import TwoPlayerBoard from './TwoPlayerBoard';

class Board extends Component {

    render() {
        return (
            <div>
                <h3>Player One</h3>
                <OnePlayerBoard />
                <br />
                <h3>Player Two</h3>
                <TwoPlayerBoard />
            </div>
        )
    }
}

export default Board;
