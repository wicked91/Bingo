import React, { Component } from "react";
import "../css/board.css";

class Cell extends Component {
    onClickhandler = () => {
        const { onClick, data } = this.props;
        onClick(data);
    };
    render() {
        const { style } = this.props;
        return (
            <td style={style} onClick={this.onClickhandler.bind(this)}>
                {this.props.data}
            </td>
        );
    }
}
export default Cell;
