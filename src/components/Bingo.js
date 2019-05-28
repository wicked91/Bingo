import React, { Component } from 'react'
import { connect } from "react-redux";
import { init_bingo, next_turn_toggle, bingo_check, game_start_toggle } from "../actions/gameActions";

class Bingo extends Component {
    componentDidUpdate(prevProps, prevState) {

        if(prevProps.onebingo.length === 5  && prevProps.twobingo.length === 5){
            const {init_bingo, gameStart } = this.props;
            alert("무승부입니다.");
            game_start_toggle(!gameStart);
            init_bingo();
        }

        else if(prevProps.onebingo.length >= 5 && prevProps.twobingo.length < 5) {
            const {init_bingo, gameStart } = this.props;
            alert("1P가 빙고를 완성했습니다.");
            game_start_toggle(!gameStart);
            init_bingo();
        } else if (prevProps.onebingo.length < 5 && prevProps.twobingo.length >= 5) {
            const {init_bingo, gameStart } = this.props;
            alert("2P가 빙고를 완성했습니다.");
            game_start_toggle(!gameStart);
            init_bingo();
        }
    }

    render() {
        return (
            <div>

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
    { init_bingo, next_turn_toggle, bingo_check }
)(Bingo);
