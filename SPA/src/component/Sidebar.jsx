import React, { Component } from "react"
import { connect } from "react-redux"

import SidebarLstConvertation from "./SidebarLstConvertation.jsx"

class Sidebar extends Component {

    componentDidMount(){
        ////set height component
        var sidebar = document.getElementById("js-sidebar-chat"),
        message = document.getElementById("js-lst-messages")
        if(sidebar && message){
            sidebar.style.height = message.clientHeight + "px"
        }
    }


    render() {
        console.log("render sidebar")
        var { auth } = this.props
        auth.avatar = '/uploads/avatar.jpg'

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