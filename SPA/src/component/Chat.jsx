import React, { Component } from "react"
import { connect } from "react-redux"

import { Redirect } from "react-router-dom"

class Chat extends Component {
    render() {
        if( !this.props.auth ){
            return <Redirect to="/chat/register" />
        }
        return (
            <div className="component-chat">
                trang chat
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        auth  : state.auth
    }
}
export default connect(mapStateToProps)(Chat)