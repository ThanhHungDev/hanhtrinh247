import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import LeftInforAuth from "./LeftInforAuth.jsx"
import { saveAuthLocalStorage } from "../library/service"
import { setterAuth } from "../action"

class Register extends Component {
    constructor(props){
        super(props);
        this.state = { alert : false , progress : false }
    }
    
    invalidLoginChat = () => {
        
        if(!this.name.value){
            return { errorField: 'email', message: "name buộc phải nhập" }
        }
        if(!this.email.value){
            return { errorField: 'email', message: "email buộc phải nhập" }
        }
        if(!this.mobile.value){
            return { errorField: 'email', message: "mobile buộc phải nhập" }
        }
        return false
    }

    LoginChat = e => {
        var email  = this.email.value,
            name   = this.name.value,
            mobile = this.mobile.value,
            detect = JSON.stringify(this.props.detect),
            validator = this.invalidLoginChat()
        if( validator ){
            this.setState({ alert : validator.message , progress : false })
            return false
        }

        this.setState({alert : false , progress : true}, ()=>{
            var action = this.props.config.url_realtime + "/api/register-chat"
            fetch(action, {
                method: "POST",
                dataType: "JSON",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email , name , mobile, detect })
            })
            .then(resp => { 
                
                if (!resp.ok) {
                    return resp.json().then((data) => {
                        throw { message: data.message, status: resp.status, error: data.errors }
                    })
                }
                return resp.json() 
            })
            .then( response => {
                
                this.setState({ alert : false , progress : false }, function(){
                    if( response.data ){
                        var auth = {
                            email, name, mobile, token : response.data.token.toString(), _id: response.data.userId.toString()
                        }
                        saveAuthLocalStorage(auth)
                        this.props.dispatch(setterAuth( auth ))
                    }
                });
            })
            .catch(error => {
                
                this.setState({ alert : error.message , progress : false })
            });
        });
        e.preventDefault();
    }

    render() {
        if( this.props.auth ){
            return <Redirect to="/chat/hung" />
        }
        return (
            <div className="component-register">
                <LeftInforAuth />
                <div className="right__register">
                    { this.state.alert && <div className="alert alert-danger">{ this.state.alert }</div> }
                    <div className="form-input">
                        <label> あなたのフルネーム <i>✵</i></label>
                        <input name="name" type="text" ref={(input) => this.name = input} />
                    </div>
                    <div className="form-input">
                        <label> メールアドレス <i>✵</i></label>
                        <input name="email" type="text" ref={(input) => this.email = input}/>
                    </div>
                    <div className="form-input">
                        <label> 電話番号 <i>✵</i></label>
                        <input name="mobile" type="text" ref={(input) => this.mobile = input}/>
                    </div>
                    <button className="btn-send-mail-contact" onClick={ this.LoginChat }> メール管理者に送信</button>
                    {
                        this.state.progress && 
                        <div className="progress progress-success"><div className="progress-loadding"></div></div>
                    }
                </div>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        config: state.config,
        detect: state.detect
    }
}
export default connect(mapStateToProps)(Register)