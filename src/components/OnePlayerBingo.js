import React, { Component } from 'react'
import { connect } from "react-redux";
import { checknum_click, next_turn_toggle, bingo_check } from "../actions/gameActions";

class OnePlayerBingo extends Component {

    render() {
        return (
            <div>
                {
                    this.props.onebingo.map((result, key) => {
                        return (
                            <h3 key={key}>
                                {result} 
                            </h3>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    onebingo: state.onebingo,
    gameStart: state.gameStart,
    checknum: state.checknum,
    turn: state.turn
});

export default connect(
    mapStateToProps,
    { checknum_click, next_turn_toggle, bingo_check }
)(OnePlayerBingo);
