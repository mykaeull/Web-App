import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { isAuthenticated } from "./utils"

//pags
import Login from "./paginas/Login"
import Register from "./paginas/Register"
import Home from "./paginas/Home"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ?
        (
            <Component {...props} />
        )
        :
        (
            <Redirect to={{pathname: "/", state: { from: props.location }}} />
        )
    )} />
)

function Routes() {

    return (
        <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" exact />
            <PrivateRoute component={Home} path="/home" exact />
            <Redirect to="/" from="*" />
        </Switch>
    )
}

export default Routes