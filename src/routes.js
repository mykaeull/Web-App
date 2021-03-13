import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

//pags
import Login from "./paginas/Login"
import Register from "./paginas/Register"
import Home from "./paginas/Home"

function Routes() {

    return (
        <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" exact />
            <Route component={Home} path="/home" exact />
            <Redirect to="/" from="*" />
        </Switch>
    )
}

export default Routes