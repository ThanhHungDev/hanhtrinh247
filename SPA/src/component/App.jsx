import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'


import Register from "./Register.jsx"
import Chat from './Chat.jsx'


class App extends Component {

    constructor(props) {

        super(props)
    }
    
    render() {
        console.log("draw app")
        return (
            <div id="Application" className="AppComponent">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/chat" render={() => <Chat />} />
                        <Route exact path="/chat/register" render={() => <Register />} />
                        <Route path='/chat/:slug' render={({ match }) => <Chat match={match} /> } />
                    </Switch>
                    
                </BrowserRouter>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        client  : state.client
    }
}
export default connect (mapStateToProps)(App);