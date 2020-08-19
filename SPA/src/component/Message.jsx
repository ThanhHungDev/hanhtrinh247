import React, { Component } from "react"
import { connect } from "react-redux"

import TYPE from "../action/type.js"

class Message extends Component {

    render() {
        var { message, convertations } = this.props,
        convActive = convertations.find(convertations => convertations.isActive),
        classTypeMessage = message.sender_id == convActive.userId ? 'float-right by-me' : 'float-left'

        if (!convActive) {
            return null
        }
        console.log(message, "messagemessagemessagemessage")
        return (
            <div className="component-message-chat" >

                <div className={classTypeMessage + " chat-group"}>
                    <figure className="avatar">
                        <img src={convActive.avatar} alt="" />
                    </figure>
                    <div className="message-content">
                        {
                            message.style == "IMAGE" &&
                            <div className={message.style} >
                                {message.attachment.map((image, index) => {
                                    return <div key={"wrapper-attachment" + index + image} className="wrapper-attachment">
                                        <img src={this.props.config.asset + image} />
                                    </div>
                                })}
                            </div>
                        }
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