import React, { Component } from 'react'
import { connect } from "react-redux";
import OnePlayerBingo from './OnePlayerBingo';
import TwoPlayerBingo from './TwoPlayerBingo';
import { checknum_init, init_bingo, next_turn_toggle, bingo_check, game_start_toggle } from "../actions/gameActions";

class Bingo extends Component {
    componentDidUpdate(prevProps, prevState) {
        const { init_bingo, gameStart, checknum_init, onebingo, twobingo } = this.props;
        if (onebingo.length === 5 && twobingo.length === 5) {
            const { init_bingo, gameStart, checknum_init } = this.props;
            alert("무승부입니다.");
            game_start_toggle(!gameStart);
            checknum_init();
            init_bingo();
            next_turn_toggle(2);
        }

        else if (onebingo.length >= 5 && twobingo.length < 5) {

            alert("1P가 빙고를 완성했습니다.");
            game_start_toggle(!gameStart);
            checknum_init();
            init_bingo();
            next_turn_toggle(2);
        } else if (onebingo.length < 5 && twobingo.length >= 5) {

            alert("2P가 빙고를 완성했습니다.");
            game_start_toggle(!gameStart);
            checknum_init();
            init_bingo();
            next_turn_toggle(2);
        }
    }

    render() {
        return (
            <div>
                <OnePlayerBingo/>
                <TwoPlayerBingo/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    onebingo: state.onebingo,
    twobingo: state.twobingo,
    gameStart: state.gameStart,
    checknum: state.checknum,
    turn: state.turn
});

export default connect(
    mapStateToProps,
    { checknum_init, init_bingo, next_turn_toggle, bingo_check }
)(Bingo);
