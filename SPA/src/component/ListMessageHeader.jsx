import React, { Component } from "react"
import { connect } from "react-redux"
import { setterAuth } from "../action"

class HeadInfo extends Component {

    btnLogout = () => {

        localStorage.setItem('auth', null)
        this.props.dispatch(setterAuth(null))
        return false
    }
    render() {

        console.log("render lại head list message")
        var { auth, convertations } = this.props
        var convertationActive = convertations.find(convertation => convertation.isActive)

        if (!convertationActive) {
            return null
        }

        var timeOnline = '口座情報： ' + auth.email + " - " + auth.mobile + " でログイン"
        if( auth.type != "local" ){
            
            timeOnline = '口座情報： ' + auth.email + " - " + auth.type + " でログイン"
        }

        return (
            <div className="component-head-info">

                <div className="user-active-chat">
                    <figure className="state-avatar active-online">
                        <img src={convertationActive.avatar} alt="" />
                    </figure>
                    <div className="text-info">
                        <span className="name">{convertationActive.name}</span>
                        <span className={(convertationActive.isOnline ? "active-now" : '') + " time-online"}>{timeOnline}</span>
                    </div>
                </div>
                <a className="btn-logout" onClick={this.btnLogout}>ログアウト</a>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        convertations: state.convertation,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(HeadInfo);