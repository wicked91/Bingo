import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checknum_click, next_turn_toggle } from "../actions/gameActions";
import Cell from './Cell';
import "../css/board.css";

class OnePlayerBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkColor: []
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(num) {
        const { gameStart, checknum, checknum_click ,next_turn_toggle, turn} = this.props;

        if (gameStart && !checknum[num - 1]) {
            if(turn === 1) {
                checknum_click(num - 1);
                next_turn_toggle(1);
            } else {
                alert('잘못된 차레입니다.');
            }        
        }
    }

    render() {
        const { oneboard, checknum } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        {
                            oneboard.map((rowData, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        {
                                            rowData.map((data, colIndex) => {
                                                let style;
                                                if (checknum[data - 1]) {
                                                    style = {
                                                        backgroundColor: 'green'
                                                    }
                                                }
                                                return (
                                                    <Cell
                                                        data={data}
                                                        rowIndex={rowIndex}
                                                        colIndex={colIndex}
                                                        key={colIndex}
                                                        onClick={this.onClick}
                                                        style={style}
                                                    />
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    oneboard: state.oneboard,
    gameStart: state.gameStart,
    checknum: state.checknum,
    turn : state.turn
});

export default connect(
    mapStateToProps,
    { checknum_click, next_turn_toggle }
)(OnePlayerBoard);
