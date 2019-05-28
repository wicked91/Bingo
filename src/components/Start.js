import React, { Component } from "react";
import { connect } from "react-redux";
import { game_start_toggle,next_turn_toggle, checknum_init, init_bingo } from "../actions/gameActions";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { game_start_toggle, gameStart, checknum_init } = this.props;
    e.preventDefault();
    game_start_toggle(!gameStart);
    checknum_init();
    next_turn_toggle(2);
  }

  render() {
    const { gameStart } = this.props;
    let btnState;
    if (!gameStart) {
      btnState = <button onClick={this.onClick}> 게임 시작 </button>;
    } else {
      btnState = <button onClick={this.onClick}> 게임 재시작 </button>;
    }
    return (
      <div>
        {btnState}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  oneboard: state.oneboard,
  gameStart: state.gameStart,
  onebingo : state.onebingo,
  twobingo : state.twobingo
});
export default connect(
  mapStateToProps,
  {  game_start_toggle, next_turn_toggle, checknum_init, init_bingo }
)(Start);
