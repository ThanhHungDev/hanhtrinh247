import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from "react-redux"

import { setterAuth } from "../action"

class MyLoginFacebook extends Component {

    componentClicked = () => { }
    responseFacebook = response => {
        
        var authen = {
            accessToken: response.accessToken, 
            userID: response.userID,
            name: response.name,
            email: response.email,
            avatar: response.picture.data.url,
            type: "facebook",
            mobile: "1234567890"
        }
        this.registerLoginChat( authen )
        
    }
    registerLoginChat = authen => {
        var action = this.props.config.url_realtime + "/api/register-chat"
        fetch(action, {
            method: "POST",
            dataType: "JSON",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authen)
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
            
            if( response.data ){
                this.props.dispatch(setterAuth({ ...response.data }))
            }
        })
        .catch(error => {
            
            console.log("fetch err: " + error.message, error)
        })
    }

    render() {
        
        return (
            <FacebookLogin
                appId="618579045460962"
                autoLoad={false}
                fields="name,email,picture"
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                textButton="Facebookでログイン"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        config: state.config
    }
}
export default connect(mapStateToProps)(MyLoginFacebook)