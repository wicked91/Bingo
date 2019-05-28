import React, { Component } from 'react'
import { connect } from "react-redux";

class TwoPlayerBingo extends Component {
    render() {
        return (
            <div>
                <h3>2p 완성 줄 목록</h3>
                {
                    this.props.twobingo.map((result, key) => {
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
    twobingo: state.twobingo
});

export default connect(
    mapStateToProps,
    { }
)(TwoPlayerBingo);
