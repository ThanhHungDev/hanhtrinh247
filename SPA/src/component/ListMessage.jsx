import React, { Component } from "react"
import { connect } from "react-redux"
import ListMessageHeader from "./ListMessageHeader.jsx"
import Message from "./Message.jsx"
import InputSend from "./InputSend.jsx"
import $ from "jquery"
// import MessageChatTyping from "./MessageChatTyping.jsx"

class ListMessage extends Component {

    componentDidUpdate() {

        var domScroll = document.getElementById("js-scroll-to-bottom")
        var domWriter = document.getElementById("js-is-write-message")

        if(document.getElementById("Application").classList.contains('convertation-change')){
            document.getElementById("Application").classList.remove('convertation-change')
            
            var domScroll = document.getElementById("js-scroll-to-bottom")
            var domWriter = document.getElementById("js-is-write-message")
            domScroll.scrollTop = domScroll.scrollHeight
        }else if(
            domScroll && 
            domWriter && 
            domWriter.classList.contains('follow-conversation')){
                domScroll.scrollTop = domScroll.scrollHeight
        }
        if(domScroll){
            
            $(domScroll).on('scroll', function(){
                
                if ($(this).scrollTop() + 
                    $(this).innerHeight() >=  
                    $(this)[0].scrollHeight) { 
                        document.getElementById("js-is-write-message").classList.add("follow-conversation")
                }else{
                    document.getElementById("js-is-write-message").classList.remove("follow-conversation")
                } 
            })
        }
    }

    render() {

        
        var { auth, convertations } = this.props
        var convertationActive = convertations.find(convertations => convertations.isActive)
        var messages = []
        if( convertationActive ){
            messages = this.props.messages.find( mess =>{
                return mess._id == convertationActive._id
            })
            if( messages ){
                messages = messages.message_data
            }
            if( !messages.length ){
                var contentMess = "口座情報： \n " +
                "Eメール：" + auth.email + "  \n " +
                "名前：" + auth.name + "  \n " +
                "モバイル：" + auth.mobile + "  \n " +
                "こんにちは、どうなされました？"
                messages = [ 
                    {
                        content: contentMess,
                        createdAt: "2020-07-29T06:51:54.963Z",
                        read: true,
                        style: "",
                        user: "ADMIN",
                        _id: "ADMIN",
                    }
                ]
            }
        }

        return (
            <div id="js-lst-messages" className="component-list-message">
                <ListMessageHeader />
                <div className="wrapper-list-message" id="js-scroll-to-bottom">
                    {messages && messages.map(
                        (message, key) => 
                        <Message
                            key={"message-chat" + key }
                            message={message} 
                        />
                    )}
                    {/* <MessageChatTyping/> */}
                </div>
                <InputSend />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        convertations: state.convertation,
        messages     : state.message,
        auth         : state.auth
    }
}
export default connect(mapStateToProps)(ListMessage)
