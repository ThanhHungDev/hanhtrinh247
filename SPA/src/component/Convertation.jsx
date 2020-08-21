import React, { Component } from "react"
import { connect } from "react-redux"

import { changeActiveConvertation } from "../action"

class Convertation extends Component {

    changeActiveUser = (id) => {

        this.props.dispatch(changeActiveConvertation(id))
        document.getElementById("Application").classList.add('convertation-change')
    }

    render() {
        var { conv } = this.props
        var classActiveMessage = conv.isActive && 'active-message'

        return (
            <div className="component-user-chat-sidebar" onClick={() => this.changeActiveUser(conv._id)}>
                <div className={ classActiveMessage + " active user-chat"}>
                    <figure className="state-avatar">
                        <img src={conv.avatar} alt="" />
                    </figure>
                    <div className="text-info">
                        <span className="name">{conv.name}</span>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        convertations: state.convertation
    }
}
export default connect(mapStateToProps)(Convertation);