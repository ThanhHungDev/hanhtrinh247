import React, { Component } from "react"
import { connect } from "react-redux"

import Convertation from "./Convertation.jsx"

class SidebarLstConvertation extends Component {

    render() {

        var { convertations } = this.props

        console.log("render convertation")

        return (
            <div className="component-list-user">
                {
                    convertations && convertations.map(
                        convertation => 
                        <Convertation key={convertation._id} conv={convertation} />
                    )
                }
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        convertations: state.convertation
    }
}

export default connect(mapStateToProps)(SidebarLstConvertation)
