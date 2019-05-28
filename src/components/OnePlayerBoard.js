import React, { Component } from "react";
import { connect } from "react-redux";
import { checknum_click, next_turn_toggle, bingo_check } from "../actions/gameActions";
import Cell from './Cell';
import "../css/board.css";

class OnePlayerBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oneboard: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']]
        };
        this.onClick = this.onClick.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.gameStart !== this.props.gameStart ) {
            if(nextProps.gameStart){
                let array = [];
                for (let index = 1; index <= 25; index++) {
                    array.push(index);
                }
                array.sort(() => {
                    return Math.random() - Math.random();
                })
    
                const { length } = array;
                const maxLength = 5;
                const iteratorCount = length / maxLength;
                let data = [];
    
                for (let i = 0; i < iteratorCount; i++) {
                    data = [
                        ...data,
                        array.slice(i * maxLength, (i + 1) * maxLength),
                    ];
                }
    
                this.setState({
                    oneboard: data
                });
            } else {
                let data = [];
                for(let index = 0; index <5; index ++){
                    data.push(['','','','','']);
                }

                this.setState({
                    oneboard: data
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const { checknum, bingo_check, gameStart } = this.props;
        const { oneboard } = this.state;
        for (let num in checknum) {
            if (checknum[num] !== prevProps.checknum[num] && gameStart === prevProps.gameStart) {
                num = Number(num);

                for (let index in oneboard) {
                    if (oneboard[index].indexOf(num + 1) >= 0) {
                        let row = Number(index);
                        let col = oneboard[index].indexOf(num + 1);

                        let array = [];

                        let temp = [];
                        let nextRow = row;
                        let nextCol = col;
                        if (checknum[oneboard[nextRow][nextCol] - 1]) {
                            temp.push(oneboard[nextRow][nextCol]);
                        }
                        while (nextRow + 1 < 5 && nextCol + 1 < 5) {
                            nextRow++;
                            nextCol++;
                            if (checknum[oneboard[nextRow][nextCol] - 1]) {
                                temp.push(oneboard[nextRow][nextCol]);
                            }
                        }

                        nextRow = row;
                        nextCol = col;
                        while (nextRow - 1 >= 0 && nextCol - 1 >= 0) {
                            nextRow--;
                            nextCol--;
                            if (checknum[oneboard[nextRow][nextCol] - 1]) {
                                temp.push(oneboard[nextRow][nextCol]);
                            }

                        }
                        if (temp.length === 5) {
                            array.push(temp);
                        }

                        temp = [];
                        nextRow = row;
                        nextCol = col;
                        if (checknum[oneboard[nextRow][nextCol] - 1]) {
                            temp.push(oneboard[nextRow][nextCol]);
                        }
                        while (nextRow - 1 >= 0 && nextCol + 1 < 5) {
                            nextRow--;
                            nextCol++;
                            if (checknum[oneboard[nextRow][nextCol] - 1]) {
                                temp.push(oneboard[nextRow][nextCol]);
                            }

                        }

                        nextRow = row;
                        nextCol = col;
                        while (nextRow + 1 < 5 && nextCol - 1 >= 0) {
                            nextRow++;
                            nextCol--;
                            if (checknum[oneboard[nextRow][nextCol] - 1]) {
                                temp.push(oneboard[nextRow][nextCol]);
                            }
                        }
                        if (temp.length === 5) {
                            array.push(temp);
                        }

                        nextRow = 0;
                        temp = [];
                        while (nextRow < 5) {
                            if (checknum[oneboard[nextRow][col] - 1]) {
                                temp.push(oneboard[nextRow][col]);
                            }
                            nextRow++;
                        }

                        if (temp.length === 5) {
                            array.push(temp);
                        }

                        nextCol = 0;
                        temp = [];
                        while (nextCol < 5) {
                            if (checknum[oneboard[row][nextCol] - 1]) {
                                temp.push(oneboard[row][nextCol]);
                            }
                            nextCol++;
                        }

                        if (temp.length === 5) {
                            array.push(temp);
                        }

                        if (array.length > 0) {
                            bingo_check(array[0], 1);
                        }
                    }
                }

            }
        }
    }

    onClick(num) {
        const { gameStart, checknum, checknum_click, next_turn_toggle, turn } = this.props;

        if (gameStart && !checknum[num - 1]) {
            if (turn === 1) {
                checknum_click(num - 1);
                next_turn_toggle(1);
            } else {
                alert('잘못된 차레입니다.');
            }
        }
    }

    render() {
        const { checknum } = this.props;
        const { oneboard } = this.state;

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
    turn: state.turn
});

export default connect(
    mapStateToProps,
    { checknum_click, next_turn_toggle, bingo_check }
)(OnePlayerBoard);
