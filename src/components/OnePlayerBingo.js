import React, { Component } from 'react'
import { connect } from "react-redux";

class OnePlayerBingo extends Component {

    render() {
        return (
            <div>
                <h3>1p 완성 줄 목록</h3>
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
});

export default connect(
    mapStateToProps,
    { }
)(OnePlayerBingo);
