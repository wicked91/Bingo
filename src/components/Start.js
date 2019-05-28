import React, { Component } from "react";
import { connect } from "react-redux";
import { set_board, game_start_toggle, checknum_init } from "../actions/gameActions";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { set_board, game_start_toggle, gameStart, checknum_init } = this.props;
    e.preventDefault();
    set_board(1);
    set_board(2);
    game_start_toggle(!gameStart);
    checknum_init();
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
  gameStart: state.gameStart
});
export default connect(
  mapStateToProps,
  { set_board, game_start_toggle, checknum_init }
)(Start);
