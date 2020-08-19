import React, { Component } from "react"
import { connect } from "react-redux"

import SidebarLstConvertation from "./SidebarLstConvertation.jsx"

import { fetchAPIChannels } from "../library/service.js"

class Sidebar extends Component {

    componentDidMount(){
        ////set height component
        var sidebar = document.getElementById("js-sidebar-chat"),
        message = document.getElementById("js-lst-messages")
        if(sidebar && message){
            sidebar.style.height = message.clientHeight + "px"
        }


        if( this.props.auth ){
            console.log( this.props.auth , "ssdfdsfsd auth ")
            var { token } = this.props.auth
            if( token ){
                fetchAPIChannels(token, this)
            }
        }
    }

    render() {
        console.log("render sidebar")
        var { auth } = this.props
        auth.avatar = 'http://babysitter.trust-growth.co.jp/uploads/avatar.jpg'

        return (
            <div id="js-sidebar-chat" className="component-sidebar-chat">
                <div className="myinfo">
                    <div className="avatar">
                        <figure className="state-avatar active-online">
                            <img src={auth.avatar} alt="" />
                        </figure>
                        <span className="name">{auth.name}</span>
                    </div>
                </div>
                <div className="list-user">
                    <SidebarLstConvertation />
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        config: state.config
    }
}
export default connect(mapStateToProps)(Sidebar)