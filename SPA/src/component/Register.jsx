import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { saveAuthLocalStorage } from "../library/service"
import { setterAuth } from "../action"

class Register extends Component {
    constructor(props){
        super(props);
        this.state = { alert : false , progress : false }
    }
    
    LoginChat = e => {
        var email  = this.email.value,
            name   = this.name.value,
            mobile = this.mobile.value,
            detect = JSON.stringify(this.props.detect)

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
                <div className="left__register">
                    <h2 className="conpany">
                        { this.props.config.company_name }
                    </h2>
                    <div className="register-address">
                        <h6>
                            <i className="hero-icon hero-account-group-outline"></i>
                            <span>{ this.props.config.company_name }</span>
                        </h6>
                        <h6>
                            <i className="hero-icon hero-update"></i>
                            <span> { this.props.config.tax_code_date } </span>
                        </h6>
                        <h6>
                            <i className="hero-icon hero-home-map-marker"></i>
                            <span>
                            { [
                                this.props.config.company_address_street,
                                this.props.config.company_address_locality,
                                this.props.config.company_address_region,
                                this.props.config.company_address_country,
                            ].join() } 
                            </span>
                        </h6>
                        <h6>
                            <i className="hero-icon hero-cellphone-nfc"></i>
                            <span>
                                日本の電話：
                                <a href={ "tel:" + this.props.config.phone_one }>
                                    { this.props.config.phone_one }
                                </a>
                            </span>
                        </h6>
                        <h6>
                            <i className="hero-icon hero-card-account-mail-outline"></i>
                            <span>
                                <a href={ "mailto:" + this.props.config.company_mail } >
                                    { this.props.config.company_mail }
                                </a>
                            </span>
                        </h6>
                    </div>
                    <h3 className="intro-chat-register">
                    チャットを設定するための情報を入力してください。 上記の情報の保護に努めています
                    </h3>
                </div>
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