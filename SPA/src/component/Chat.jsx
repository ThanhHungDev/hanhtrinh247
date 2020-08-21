import React, { Component } from "react"
import { connect } from "react-redux"

import { Redirect } from "react-router-dom"
/// soccket 

import { fetchAPIChannels } from "../library/service.js"


//// define
import Sidebar from "./Sidebar.jsx"
import ListMessage from "./ListMessage.jsx"

class Chat extends Component {

    componentDidMount(){

        if( this.props.auth ){
            
            fetchAPIChannels(this.props.auth, this)
        }
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
        auth: state.auth,
        config: state.config
    }
}
export default connect(mapStateToProps)(Chat)