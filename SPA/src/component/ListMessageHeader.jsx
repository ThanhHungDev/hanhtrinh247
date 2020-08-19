import React, { Component } from "react"
import { connect } from "react-redux"

class HeadInfo extends Component {

    render() {

        console.log("render lại head list message")
        var { convertations } = this.props
        var convertationActive = convertations.find(convertation => convertation.isActive)

        if (!convertationActive) {
            return null
        }

        var timeOnline = 'オンライン'


        return (
            <div className="component-head-info">

                <div className="user-active-chat">
                    <figure className="state-avatar active-online">
                        <img src={convertationActive.avatar} alt="" />
                    </figure>
                    <div className="text-info">
                        <span className="name">{convertationActive.name}</span>
                        <span className={(convertationActive.isOnline ? "active-now" : '') + " time-online"}>{timeOnline}</span>
                    </div>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        convertations: state.convertation
    }
}
export default connect(mapStateToProps)(HeadInfo);