import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from "react-redux"

import { setterAuth } from "../action"

class MyLoginGoogle extends Component {


    constructor(props) {
        super(props)
    }

    componentClicked = () => { }
    
    responseGoogleError = response => {
        console.log(response, "lỗi responseGoogleError")
        
        console.log(response, "responseGoogleError")
    }
    responseGoogle = response => {
        console.log(response, "đúng responseGoogle")
        
        var authen = {
            accessToken: response.accessToken,
            userID: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            avatar: response.profileObj.imageUrl,
            type: "google",
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
            <GoogleLogin
                clientId="187185206926-smqoej8k4aj9k3sdkq46bogdf4eojvn6.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn-google-login">
                        <i className="hero-icon hero-google"></i>
                        Googleでログイン
                    </button>
                )}
                // buttonText=""
                icon="fa-google"
                cssClass="my-google-button-class"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogleError}
                cookiePolicy={'single_host_origin'}
                ></GoogleLogin>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        auth  : state.auth,
        config: state.config
    }
}
export default connect(mapStateToProps)(MyLoginGoogle)