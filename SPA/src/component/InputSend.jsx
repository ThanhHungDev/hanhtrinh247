import React, { Component } from "react";
import { connect } from "react-redux";
import ListEmoji from "./ListEmoji.jsx";
import { send } from "../library/service.js"
import $ from "jquery"

class InputSend extends Component {

    componentDidMount() {
        window.onclick = function (event) {
            if (event.target) {
                if (event.target.classList.contains('component-emoji')) {
                    return;
                }
            }
            var emojis = document.getElementById("js-emojis")
            if (emojis) {
                emojis.classList.remove("show");
                setTimeout(function () {
                    if (emojis.classList.contains("show-temp")) {
                        emojis.classList.remove("show-temp")
                        emojis.classList.add("show")
                    }
                }, 100)
            }
        }
    }

    showListEmoji = (event) => {
        var emojis = document.getElementById("js-emojis")
        if (emojis) {
            emojis.classList.add("show-temp")
        }
    }

    handleSendMessageReactSubmit = () => {
        
        var { convertations, auth } = this.props,
        convActive = convertations.find(convertations => convertations.isActive)

        var objMess = { 
            message: " 💝 ", 
            style: "EMOJI", 
            token: this.props.auth.token,
            user: auth._id,
            channel_id: convActive._id,
            component: this,
        }

        send(objMess)
    }

    listenKeyDown = event => {
        var input = document.getElementById("js-input-chat")
        if (!input) return false
        
        /// space character replace emoji
        if (event.keyCode == 32) {
            var content = input.value
            /// get word last
            var words = content.trim().split(" ")
            var wordLastest = words[words.length - 1]
            //// check have sysbol 
            var emojisCall = CONFIG_EMOJIS.filter(item => item.sign == wordLastest)
            if(emojisCall.length){
                /// add icon 
                var lastIndex = content.trim().lastIndexOf(" ")
                input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol
            }
        }
    }
    listenKeyUp = event => {
        var input = document.getElementById("js-input-chat")
        if (!input) return false
        
        if (event.keyCode == 13 && !event.shiftKey) {

            var { convertations, auth } = this.props,
            convActive = convertations.find(convertations => convertations.isActive)

            var objMess = { 
                message: event.target.value, 
                style: "", 
                token: this.props.auth.token,
                user: auth._id,
                channel_id: convActive._id,
                component: this,
            }

            send(objMess)
            input.value = ''
            return false
        }
    }
    btnSendMessage = () => {
        var input = document.getElementById("js-input-chat")
        if (!input) return false

        var { convertations, auth } = this.props,
        convActive = convertations.find(convertations => convertations.isActive)

        var objMess = { 
            message: event.target.value, 
            style: "", 
            token: this.props.auth.token,
            user: auth._id,
            channel_id: convActive._id,
            component: this,
        }

        send(objMess)
        input.value = ''
        return false
    }

    render() {

        var { convertations } = this.props,
            convActive = convertations.find(convertations => convertations.isActive)
            if( !convActive ){
                return null
            }
        return (
            <div id="js-is-write-message" className="component-input-send-chat ">
                <i
                    className="hero-icon hero-sticker-emoji emoticon"
                    onClick={this.showListEmoji}
                ></i>
                <textarea
                    id="js-input-chat"
                    onKeyDown={ this.listenKeyDown }
                    onKeyUp={this.listenKeyUp}
                    placeholder="メッセージを書く..."
                ></textarea>
                <i className="hero-icon hero-send-outline send" onClick={this.btnSendMessage}></i>
                <i className="hero-icon hero-heart-multiple-outline react" onClick={this.handleSendMessageReactSubmit}></i>
                <ListEmoji />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth         : state.auth,
        convertations: state.convertation,
        socket       : state.socket
    }
}
export default connect(mapStateToProps)(InputSend);
