import React, { Component } from 'react';
import { connect } from "react-redux";
import OnePlayerBoard from './OnePlayerBoard';
import TwoPlayerBoard from './TwoPlayerBoard';
import { checknum_click, next_turn_toggle, bingo_check } from "../actions/gameActions";
class Board extends Component {

    componentDidUpdate(){
        console.log("ASdf");
    }

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
const mapStateToProps = state => ({
    oneboard: state.oneboard,
    gameStart: state.gameStart,
    checknum: state.checknum,
    turn: state.turn
});

export default connect(
    mapStateToProps,
    { checknum_click, next_turn_toggle, bingo_check }
)(Board);
