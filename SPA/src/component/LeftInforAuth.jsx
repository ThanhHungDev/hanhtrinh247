
import React, { Component } from "react"
import { connect } from "react-redux"

class LeftInforAuth extends Component {

    render() {

        return (
            <div className="left__register">
                <h2 className="conpany">
                    {this.props.config.company_name}
                </h2>
                <div className="register-address">
                    <h6>
                        <i className="hero-icon hero-account-group-outline"></i>
                        <span>{this.props.config.company_name}</span>
                    </h6>
                    <h6>
                        <i className="hero-icon hero-update"></i>
                        <span> {this.props.config.tax_code_date} </span>
                    </h6>
                    <h6>
                        <i className="hero-icon hero-home-map-marker"></i>
                        <span>
                            {[
                                this.props.config.company_address_street,
                                this.props.config.company_address_locality,
                                this.props.config.company_address_region,
                                this.props.config.company_address_country,
                            ].join()}
                        </span>
                    </h6>
                    <h6>
                        <i className="hero-icon hero-cellphone-nfc"></i>
                        <span>
                            日本の電話：
                                <a href={"tel:" + this.props.config.phone_one}>
                                {this.props.config.phone_one}
                            </a>
                        </span>
                    </h6>
                    <h6>
                        <i className="hero-icon hero-card-account-mail-outline"></i>
                        <span>
                            <a href={"mailto:" + this.props.config.company_mail} >
                                {this.props.config.company_mail}
                            </a>
                        </span>
                    </h6>
                </div>
                <h3 className="intro-chat-register">
                    チャットを設定するための情報を入力してください。 上記の情報の保護に努めています
                    </h3>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        config: state.config,
        detect: state.detect
    }
}
export default connect(mapStateToProps)(LeftInforAuth)

