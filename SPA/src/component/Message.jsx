import React, { Component } from "react"
import { connect } from "react-redux"

import TYPE from "../action/type.js"

class Message extends Component {

    render() {
        var { message, convertations, auth } = this.props,
        convActive = convertations.find(convertations => convertations.isActive),
        classTypeMessage = message.user != auth._id ? 'float-left' : 'float-right by-me'
        if (!convActive) {
            return null
        }
        
        return (
            <div className="component-message-chat" >

                <div className={classTypeMessage + " chat-group"}>
                    <figure className="avatar">
                        <img src={convActive.avatar} alt="" />
                    </figure>
                    <div className="message-content">
                        <div className={message.style + " text"} >{message.content}</div>
                    </div>
                </div>

            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        convertations: state.convertation,
        config: state.config
    }
}
export default connect(mapStateToProps)(Message)