import React, { Component } from "react"

class App extends Component {

    constructor(props) {

        super(props)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    render() {
        console.log("draw app")
        return (
            <div className="AppComponent" id="Application">
                app nè
            </div>
        )
    }
}

export default App

