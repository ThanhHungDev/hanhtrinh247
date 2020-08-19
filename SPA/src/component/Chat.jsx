import React, { Component } from "react"
import { connect } from "react-redux"

import { Redirect } from "react-router-dom"
import { socketInitialConnect } from "../library/service"
/// soccket 
import socketIOClient from "socket.io-client"


//// define
import Sidebar from "./Sidebar.jsx"
import ListMessage from "./ListMessage.jsx"

class Chat extends Component {

    componentDidMount(){

        socketInitialConnect(socketIOClient, this )
    }
    render() {

        if( !this.props.auth ){
            return <Redirect to="/chat/register" />
        }
        return (
            <div className="component-chat">
                <div className="wrapper-page-chat">
                    <Sidebar />
                    <ListMessage />
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Chat)